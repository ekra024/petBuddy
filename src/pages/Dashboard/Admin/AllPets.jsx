import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

import LoaddingPage from "../../../Loading/LoaddingPage";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const AllPets = () => {
   const [sorting, setSorting] = useState([]);
   const {user} = useAuth();
  const axiosSecure = useAxiosSecure(); 
  // Fetch all pets (admin)
  const { data: pets = [], isLoading } = useQuery({
    queryKey: ["admin-all-pets"],
    enabled:!!user.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`AllPets/admin/${user.email}`);
      return res.data;
    },
  });
  console.log(pets);
  const columns = useMemo(
    () => [
      {
        header: "SL",
        cell: (info) => info.row.index + 1,
      },
      {
        accessorKey: "image",
        header: "Pet",
        cell: ({ row }) => (
          <img
            src={row.original.pet_image}
            alt="pet"
            className="w-12 h-12 rounded-lg object-cover"
          />
        ),
      },
      {
        accessorKey: "petName",
        header: "Name",
        cell:({row}) => (
          <span>{row.original.petName}</span>
        )
      },
      {
        accessorKey: "category",
        header: "Category",
        cell:({row}) => (
          <span>{row.original?.category.value}</span>
        )
      },
      {
        accessorKey: "ownerEmail",
        header: "Owner",
        cell:({row}) => (
          <span>{row.original.email}</span>
        )
      },
      {
        accessorKey: "adopted",
        header: "Status",
        cell: ({ row }) =>
          row.original.adoption ? (
            <span className="inline-flex items-center gap-1 text-green-600 font-medium">
              <FiCheckCircle /> Adopted
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-yellow-600 font-medium">
              <FiXCircle /> Not Adopted
            </span>
          ),
      },
    ],
    []
  );

   const table = useReactTable({
    data: pets,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (isLoading) {
    return <LoaddingPage /> ;
  }
  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#002169]">All Pets</h1>
        <p className="text-gray-500">Manage all pets added to PetBuddy</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow border">
        <table className="w-full">
          <thead className="bg-[#f7f4f7]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-4 py-3 text-left text-sm font-semibold text-[#002169] cursor-pointer select-none"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: " ↑",
                      desc: " ↓",
                    }[header.column.getIsSorted()] ?? ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-t hover:bg-gray-50 transition"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 text-sm">
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {pets.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No pets found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPets;