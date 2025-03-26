import React from "react";

export default function CheckoutPage() {
  return (
    <div className="container bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Full Name" className="p-2 border rounded" />
        <input type="text" placeholder="Shipping Address" className="p-2 border rounded" />
        <input type="text" placeholder="Payment Details" className="p-2 border rounded" />
        <button className="bg-green-600 text-white py-2 rounded">Place Order</button>
      </form>
    </div>
  );
}