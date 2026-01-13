import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LoaddingPage from "../../../Loading/LoaddingPage";

const MyAddedPets = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [sorting, setSorting] = useState([]);

  const { data: pets = [], isLoading, refetch } = useQuery({
    queryKey: ["userPets", user.email],
    enabled: !!user.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/pets/user/${user.email}`);
      return res.data;
    },
  });

  const handleAdopted = async (id) => {
    const res = await axiosSecure.patch(`/pets/adopt/${id}`);

    if(res.data.modifiedCount > 0) {
      Swal.fire({
      icon: "success",
      title: "Pet marked as Adopted",
      showConfirmButton: true,
    })
    refetch();
    }
    
  }



  const columns = [
    {
      header: "SL",
      accessorFn: (_, i) => i + 1,
    },

    {
      header: "Pet Name",
      accessorKey: "petName",
    },

    {
      header: "Category",
      accessorKey: "category.value",
    },

    {
      header: "Image",
      accessorKey: "image",
      cell: ({ row }) => (
        <img
          src={row.original.pet_image}
          className="w-12 h-12 rounded object-cover"
        />
      ),
    },

    {
      header: "Adoption Status",
      accessorKey: "adopted",
      cell: ({ row }) => (
        <span
          className={
            row.original.adoption
              ? "text-green-600 font-semibold"
              : "text-red-600 font-semibold"
          }
        >
          {row.original.adoption ? "Adopted" : "Not Adopted"}
        </span>
      ),
    },

    {
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex flex-wrap gap-2">
          <Link to={`/dashboard/update-pet/${row.original._id}`} className="border px-4 py-2 rounded bg-primary text-white" >Update</Link>
          <button onClick={() => handleAdopted(row.original._id)} className="border px-4 py-2 rounded bg-green-700 text-white">Adopted</button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: pets,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (isLoading) return <LoaddingPage />;

  return (
    <div>
      {pets.length === 0 ? (
          <div className="flex justify-center items-center">
            No Data to Show.
          </div>): <div className="p-6 bg-white shadow rounded-xl">
      <h2 className="text-3xl font-bold mb-4 text-[#002169] text-center">
        My Added Pets
      </h2>
      <table className="w-full">
        <thead className="text-center">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="cursor-pointer border-b py-2 text-left px-2"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{ asc: " ▲", desc: " ▼" }[header.column.getIsSorted()] || ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border-b py-2 px-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div> }
    </div>
  );
};

export default MyAddedPets;
