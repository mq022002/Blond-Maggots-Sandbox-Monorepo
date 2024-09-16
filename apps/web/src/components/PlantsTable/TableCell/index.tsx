import { ReactNode } from "react";

interface TableCellProps {
  children: ReactNode;
}

const TableCell: React.FC<TableCellProps> = ({ children }) => (
  <td className="p-4 text-left border border-black">{children}</td>
);

export default TableCell;
