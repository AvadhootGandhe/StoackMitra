"use client";

import { useRouter } from "next/navigation";

export default function DetailsPage() {
  const router = useRouter();

  // Sample product details
  const productDetails = [
    { name: "Product A", currentStock: 100, requiredStock: 150 },
    { name: "Product B", currentStock: 50, requiredStock: 80 },
    { name: "Product C", currentStock: 200, requiredStock: 180 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>

      {/* Product Details Table */}
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Product Name</th>
            <th className="border p-2">Current Stock</th>
            <th className="border p-2">Required Stock</th>
          </tr>
        </thead>
        <tbody>
          {productDetails.map((product, index) => (
            <tr key={index} className="border">
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">{product.currentStock}</td>
              <td className="border p-2">{product.requiredStock}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Back Button */}
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => router.push("/")}
      >
        Back to Dashboard
      </button>
    </div>
  );
}
