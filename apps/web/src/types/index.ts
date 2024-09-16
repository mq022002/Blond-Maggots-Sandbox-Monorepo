export interface Plant {
  id: number;
  name: string;
  type: string;
  origin: string;
}

export interface PlantsTableProps {
  plants: Plant[];
}
