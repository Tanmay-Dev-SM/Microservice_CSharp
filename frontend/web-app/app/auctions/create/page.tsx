import Heading from "@/app/components/Heading";
import React from "react";
import AuctionFrom from "../AuctionFrom";

export default function Create() {
  return (
    <div className="mx-auto max-w-[75%] shadow-lg p-10 bg-white rounded-lg">
      <Heading title="Sell your item!" subtitle="Please enter the details of your item" />
      <AuctionFrom />
    </div>
  );
}
