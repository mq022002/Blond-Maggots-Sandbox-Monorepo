"use client";

import { useEffect, useState } from "react";
import getPlants from "@/app/utils/getPlants";
import PlantsTable from "@/app/components/PlantsTable";

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

  return <PlantsTable plants={plants} />;
}
