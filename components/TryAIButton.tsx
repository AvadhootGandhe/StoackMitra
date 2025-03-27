"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function TryAIButton() {
  const router = useRouter();
  const [predictions, setPredictions] = useState([
    { name: "Jacket", CurrentStock: 50, RequiredStock: 80 },
    { name: "T-Shirt", CurrentStock: 30, RequiredStock: 60 },
    { name: "Jeans", CurrentStock: 40, RequiredStock: 70 }
  ]);
  const [showPopup, setShowPopup] = useState(false);

  // Chart Data
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Predicted Sales",
        data: [50, 60, 70, 80, 90, 75, 65, 55, 85, 95, 100, 110],
        backgroundColor: "blue",
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-black mb-4">📊 AI Stock Prediction</h1>

      {/* Chart */}
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <Bar data={chartData} />
      </div>

      {/* Table */}
      <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden text-black">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Current Stock</th>
            <th className="px-4 py-2">Required Stock</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {predictions.map((product, index) => (
            <tr key={index} className="border-b border-gray-300 text-center">
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">{Math.round(product.CurrentStock)}</td>
              <td className="px-4 py-2">{Math.round(product.RequiredStock)}</td>
              <td className="px-4 py-2">
                <button 
                  onClick={() => setShowPopup(true)}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Yes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* View Details Button */}
      <button 
        onClick={() => {
          localStorage.setItem("stockData", JSON.stringify(predictions));
          router.push("/details");
        }}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        View Details
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="text-xl font-bold text-black">✅ Order Placed Successfully!</p>
            <button 
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
