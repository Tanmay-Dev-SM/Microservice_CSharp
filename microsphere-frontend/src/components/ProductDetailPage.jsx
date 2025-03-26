import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { settings } from "../settings";
import { getRole } from "../auth";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const role = getRole();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${settings.auctionService}/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handlePlaceBid = async () => {
    const response = await fetch(`${settings.auctionService}/${id}/bid`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: parseFloat(bidAmount) })
    });
    setMessage(response.ok ? "Bid placed successfully!" : "Failed to place bid.");
  };

  const handleBuyNow = () => navigate("/checkout");

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="container bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{product.make} {product.model}</h1>
      <p className="text-gray-600 mb-1">Year: {product.year}</p>
      <p className="text-green-600 text-lg mb-4">${product.reservePrice}</p>
      {role === "seller" ? (
        <div className="space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Sell Now</button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">Accept Bidding</button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <button onClick={handleBuyNow} className="bg-green-500 text-white px-4 py-2 rounded">Buy Now</button>
          <input
            type="number"
            placeholder="Enter bid amount"
            className="border p-2 rounded"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
          />
          <button onClick={handlePlaceBid} className="bg-yellow-500 text-white px-4 py-2 rounded">
            Place Bid
          </button>
          {message && <p className="text-blue-600 mt-2">{message}</p>}
        </div>
      )}
    </div>
  );
}