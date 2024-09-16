import { PlantsTableProps } from "@/types";
import TableCell from "./TableCell";
import TableHeader from "./TableHeader";

const PlantsTable: React.FC<PlantsTableProps> = ({ plants }) => (
  <div className="flex justify-center items-center py-20">
    <table className="w-4/5 border-collapse border border-black mx-auto overflow-auto">
      <thead>
        <tr>
          <TableHeader>ID</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Type</TableHeader>
          <TableHeader>Origin</TableHeader>
        </tr>
      </thead>
      <tbody>
        {plants.map((plant) => (
          <tr key={plant.id}>
            <TableCell>{plant.id}</TableCell>
            <TableCell>{plant.name}</TableCell>
            <TableCell>{plant.type}</TableCell>
            <TableCell>{plant.origin}</TableCell>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PlantsTable;
