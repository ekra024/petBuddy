import { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoaddingPage from "../../../Loading/LoaddingPage";
import Swal from "sweetalert2";


const AllUsers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: allUsers = [], isLoading, refetch } = useQuery({
    queryKey: ["allUsers"],
    enabled: !!user.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/allUsers/admin/${user.email}`);
      return res.data;
    },
  });

  const handleMakeAdmin = async (id) => {
    const result = await Swal.fire({
      title: "Make Admin?",
      text: "This user will gain full admin access",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, make admin",
    });

    if (result.isConfirmed) {
      await axiosSecure.patch(`/allUsers/admin/${id}`);
      refetch();
      Swal.fire("Success", "User promoted to admin", "success");
    }
  };

  const columns = useMemo(
    () => [
      {
        header: "#",
        cell: ({ row }) => row.index + 1,
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "created-at",
        header: "Created At",
        cell: ({row}) => {
          return new Date(row.original.created_at).toLocaleDateString();
        },
      },
      {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => (
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              row.original.role === "admin"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {row.original.role || "user"}
          </span>
        ),
      },
      {
        header: "Action",
        cell: ({ row }) =>
          row.original.role === "admin" ? (
            <span className="text-green-600 font-semibold">Admin</span>
          ) : (
            <button
              onClick={() => handleMakeAdmin(row.original._id)}
              className="px-4 py-1 rounded-lg border border-indigo-500 text-indigo-600 hover:bg-indigo-50 transition"
            >
              Make Admin
            </button>
          ),
      },
    ],
   []
  );

  const table = useReactTable({
    data: allUsers,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (isLoading) return <LoaddingPage />;
  return (
    <div>
      {allUsers.length === 0 ? (
        <div className="flex justify-center items-center">No Data to Show.</div>
      ) : (
        <div className="bg-white p-6 rounded-2xl shadow">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-semibold">Registered Users Are Here</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-indigo-50">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className="text-left px-4 py-3 font-semibold text-gray-700 cursor-pointer select-none"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " ▲",
                          desc: " ▼",
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
                    className="border-b hover:bg-gray-50 transition"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-4 py-3">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
