using System;
using AuctionService;
using BiddingService.Models;
using Grpc.Net.Client;

namespace BiddingService.Services;

public class GrpcAuctionClient
{
  private readonly ILogger<GrpcAuctionClient> _logger;
  private readonly IConfiguration _config;

  public GrpcAuctionClient(ILogger<GrpcAuctionClient> logger, IConfiguration config)
  {
    _logger = logger;
    _config = config;
  }

  public Auctions GetAuctions(string id)
  {
    _logger.LogWarning("Calling GRPC Service");
    var channel = GrpcChannel.ForAddress(_config["GrpcAuction"]);
    var client = new GrpcAuction.GrpcAuctionClient(channel);
    var request = new GetAuctionRequest{Id = id};

    try
    {
      var reply = client.GetAuction(request);
      var auction = new Auctions
      {
        ID = reply.Auction.Id,
        AuctionEnd = DateTime.Parse(reply.Auction.AuctionEnd),
        Seller = reply.Auction.Seller,
        ReservePrice = reply.Auction.ReservePrice
      };
      return auction;
    }
    catch(Exception ex){
      _logger.LogError(ex, "Could not call GRPC Server");
      return null;
    }
  }

}
