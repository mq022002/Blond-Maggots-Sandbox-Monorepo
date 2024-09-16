"use client";

import { useEffect, useState } from "react";
import { Plant } from "@/app/types";
import getPlants from "@/app/utils/getPlants";
import PlantsTable from "@/app/components/PlantsTable";

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
