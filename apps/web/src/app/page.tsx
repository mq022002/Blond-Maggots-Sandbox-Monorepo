"use client";

import { useEffect, useState } from "react";
import getPlants from "@/app/utils/getPlants";

interface Plant {
  id: number;
  name: string;
  type: string;
  origin: string;
}

export default function HomePage() {
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    getPlants()
      .then((data) => setPlants(data))
      .catch((error) =>
        console.error("An error occurred while fetching the plants:", error)
      );
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <table className="w-4/5 border-collapse border border-black mx-auto">
        <thead>
          <tr>
            <th className="p-4 text-left border border-black bg-green-500 text-white">
              ID
            </th>
            <th className="p-4 text-left border border-black bg-green-500 text-white">
              Name
            </th>
            <th className="p-4 text-left border border-black bg-green-500 text-white">
              Type
            </th>
            <th className="p-4 text-left border border-black bg-green-500 text-white">
              Origin
            </th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant) => (
            <tr key={plant.id}>
              <td className="p-4 text-left border border-black">{plant.id}</td>
              <td className="p-4 text-left border border-black">
                {plant.name}
              </td>
              <td className="p-4 text-left border border-black">
                {plant.type}
              </td>
              <td className="p-4 text-left border border-black">
                {plant.origin}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
