"use client";

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useRouter } from "next/navigation";

export default function TryAIButton() {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setLoading(true);

    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([
        { date: "2025-01-01", store: 1, item: 1 },
        { date: "2025-02-01", store: 1, item: 2 },
        { date: "2025-03-01", store: 1, item: 3 },
      ]),
    });

    const data = await response.json();

    // Format month names correctly
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const updatedData = data.map((item) => {
      const predictedSales = Math.round(item["Predicted Sales"]);
      const currentStock = Math.floor(Math.random() * 50);
      const requiredStock = Math.max(predictedSales - currentStock, 0);

      return {
        ...item,
        monthLabel: monthNames[item.month - 1], // Convert month number to name
        "Predicted Sales": predictedSales,
        CurrentStock: currentStock,
        RequiredStock: Math.round(requiredStock),
      };
    });

    setPredictions(updatedData);
    setLoading(false);
    setShowModal(true);
  };

  return (
    <div>
      {/* AI Button */}
      <button 
        onClick={handleClick} 
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Loading..." : "Try AI"}
      </button>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
            <h2 className="text-lg font-bold text-black">Stock Prediction</h2>

            {/* Stock Graph with Month Names */}
            <div className="mt-4 h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={predictions}>
                  <XAxis dataKey="monthLabel" /> {/* Show month names */}
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="Predicted Sales" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Table */}
            <table className="mt-4 table-auto w-full border-collapse border border-gray-400 text-black">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-4 py-2">Month</th>
                  <th className="border border-gray-400 px-4 py-2">Predicted Sales</th>
                  <th className="border border-gray-400 px-4 py-2">Current Stock</th>
                  <th className="border border-gray-400 px-4 py-2">Required Stock</th>
                  <th className="border border-gray-400 px-4 py-2">Place Order</th>
                </tr>
              </thead>
              <tbody>
                {predictions.map((pred, index) => (
                  <tr key={index} className="text-center text-black">
                    <td className="border border-gray-400 px-4 py-2">{pred.monthLabel}</td>
                    <td className="border border-gray-400 px-4 py-2">{pred["Predicted Sales"]}</td>
                    <td className="border border-gray-400 px-4 py-2">{pred.CurrentStock}</td>
                    <td className="border border-gray-400 px-4 py-2">{pred.RequiredStock}</td>
                    <td className="border border-gray-400 px-4 py-2 font-bold">
                      {pred["Place Order"] === "Yes" ? (
                        <button
                          onClick={() => setShowOrderPopup(true)}
                          className="text-red-500 underline"
                        >
                        Yes
                        </button>
                      ) : (
                        <span className="text-green-500">✅ No</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Buttons */}
            <div className="mt-4 flex justify-between">
              <button 
                onClick={() => setShowModal(false)} 
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
              <button 
                onClick={() => router.push("/details")}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order Placed Popup */}
      {showOrderPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <h2 className="text-lg font-bold text-black">✅ Order Placed Successfully!</h2>
            <p className="text-black mt-2">Your order has been placed for the required stock.</p>
            <button
              onClick={() => setShowOrderPopup(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
