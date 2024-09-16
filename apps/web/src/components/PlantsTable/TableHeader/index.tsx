import { ReactNode } from "react";

interface TableHeaderProps {
  children: ReactNode;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => (
  <th className="p-4 text-left border border-black bg-green-500 text-white">
    {children}
  </th>
);

export default TableHeader;
