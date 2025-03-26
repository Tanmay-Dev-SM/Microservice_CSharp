using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace AuctionService.Entities;

[Table("Items")]
public class Item
{
    public Guid Id { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    public string Color { get; set; }
    public int Mileage { get; set; }
    public string ImageUrl { get; set; }

    // nav properties
    public Auction Auction { get; set; } //Class Data type defined in Entitiy Folder it is One-One Mapped with the Item Model/Entitiy but in reverse option used for FK concept
    public Guid AuctionId { get; set; }
}
