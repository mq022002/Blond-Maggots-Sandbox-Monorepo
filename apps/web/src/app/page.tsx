"use client";

import { useEffect, useState } from "react";
import { Plant } from "@/types";
import getPlants from "@/utils/getPlants";
import PlantsTable from "@/components/PlantsTable";

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
