import React, { useEffect, useState } from "react";
import { settings } from "../settings";

export default function SellerDashboard() {
  const [auctions, setAuctions] = useState([]);
  const [formData, setFormData] = useState({ make: "", model: "", year: "", reservePrice: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchSellerAuctions = async () => {
      const res = await fetch(`${settings.auctionService}`);
      const data = await res.json();
      setAuctions(data.filter(a => a.seller === "seller"));
    };
    fetchSellerAuctions();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateAuction = async () => {
    const res = await fetch(`${settings.auctionService}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, year: parseInt(formData.year) })
    });
    setMessage(res.ok ? "Auction created!" : "Failed to create auction.");
    if (res.ok) setFormData({ make: "", model: "", year: "", reservePrice: "" });
  };

  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-4">Seller Dashboard</h2>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Create New Auction</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="make" value={formData.make} onChange={handleInputChange} placeholder="Make" className="p-2 border rounded" />
          <input name="model" value={formData.model} onChange={handleInputChange} placeholder="Model" className="p-2 border rounded" />
          <input name="year" value={formData.year} onChange={handleInputChange} placeholder="Year" type="number" className="p-2 border rounded" />
          <input name="reservePrice" value={formData.reservePrice} onChange={handleInputChange} placeholder="Reserve Price" className="p-2 border rounded" />
        </div>
        <button onClick={handleCreateAuction} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Create Auction</button>
        {message && <p className="mt-2 text-blue-600">{message}</p>}
      </div>

      <h3 className="font-semibold mb-2">Your Active Listings</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {auctions.map((a) => (
          <li key={a.id} className="border p-4 rounded shadow bg-white">
            <h4 className="text-lg font-bold">{a.make} {a.model}</h4>
            <p>Year: {a.year}</p>
            <p className="text-green-700">Reserve: ${a.reservePrice}</p>
            <p className="text-sm text-gray-500">Ends: {a.auctionEnd}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
