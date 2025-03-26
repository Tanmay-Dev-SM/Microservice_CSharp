import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { settings } from "../settings";

// export default function HomePage() {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`${settings.searchService}?searchTerm=${searchTerm}`);
//       const data = await response.json();
//       setProducts(data);
//     };

//     fetchData();
//   }, [searchTerm]);

//   return (
//     <div className="container">
//       <input
//         type="text"
//         placeholder="Search items..."
//         className="p-2 border rounded w-full mb-4"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <Link to={`/product/${product.id}`} key={product.id} className="border p-4 rounded shadow bg-white">
//             <h2 className="font-bold text-lg">{product.make}</h2>
//             <p className="text-gray-600">{product.model}</p>
//             <p className="text-green-600 font-semibold">${product.price}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
export default function LoginPage() {
  return <h2 style={{ textAlign: "center" }}>🔐 This is the Login Page</h2>;
}

