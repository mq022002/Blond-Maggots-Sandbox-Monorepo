"use client";

import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
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
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Origin</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant) => (
            <tr key={plant.id}>
              <td>{plant.id}</td>
              <td>{plant.name}</td>
              <td>{plant.type}</td>
              <td>{plant.origin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
