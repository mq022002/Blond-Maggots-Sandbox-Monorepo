import { PlantsTableProps } from "@/app/types";

const PlantsTable: React.FC<PlantsTableProps> = ({ plants }) => (
  <div className="flex justify-center items-center py-20">
    <table className="w-4/5 border-collapse border border-black mx-auto overflow-auto">
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
            <td className="p-4 text-left border border-black">{plant.name}</td>
            <td className="p-4 text-left border border-black">{plant.type}</td>
            <td className="p-4 text-left border border-black">
              {plant.origin}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PlantsTable;
