namespace AuctionService.Entities; //put a .Foldername after the namespace class name

public class Auction
{
    public Guid Id { get; set; }
    public int ReservePrice { get; set; } = 0;
    public string Seller { get; set; }
    public string Winner { get; set; }
    public int? SoldAmount { get; set; } // Optional Property
    public int? CurrentHighBid { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow; // Use UTC values for Postgress DataBase
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    public DateTime AuctionEnd { get; set; }
    public Status Status { get; set; } //Enum Data type defined in Entities Folder
    public Item Item { get; set; } //Class Data type defined in Entitiy Folder it is One-One Mapped with the Item Model/Entitiy but in reverse option used for FK concept
}
