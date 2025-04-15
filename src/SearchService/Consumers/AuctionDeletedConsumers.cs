using System;
using Contracts;
using MassTransit;
using MongoDB.Entities;
using SearchService.Models;

namespace SearchService.Consumers;

public class AuctionDeletedConsumers : IConsumer<AuctionDelted>
{
    public async Task Consume(ConsumeContext<AuctionDelted> context)
    {
        Console.WriteLine("--> Consuming AuctionDeleted: " + context.MessageId);

        var result = await DB.DeleteAsync<Item>(context.Message.Id);

        if (!result.IsAcknowledged)
        {
            throw new MessageException(typeof(AuctionDelted), "Problem deleting mongodb");
        }
    }
}
