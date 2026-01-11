import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { FaDonate, FaPause, FaPlay } from "react-icons/fa";
import { FiCheckCircle, FiClock } from "react-icons/fi";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import LoaddingPage from "../../../Loading/LoaddingPage";
import Swal from "sweetalert2";

const AllCampaigns = () => {
  const [sorting, setSorting] = useState([]);

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: campaigns = [], isLoading, refetch } = useQuery({
    queryKey: ["admin-all-campaigns"],
    enabled: !!user.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/allCampaigns/admin/${user.email}`);
      return res.data;
    },
  });

  const handlePause = async (campId, currentStatus) => {
      const res = await axiosSecure.patch(`/campaigns/pause/${campId}`, {
        paused: !currentStatus,
      });
      if (res.data.modifiedCount > 0) {
        Swal.fire(
          "Success",
          `Campaign has been ${
            !currentStatus ? "paused" : "activated"
          } successfully`,
          "success"
        );
        refetch();
      }
    };

  const columns = useMemo(() => [
    {
      header: "SL",
      cell: (info) => info.row.index + 1,
    },
    {
      accessorKey: "title",
      header: "Campaign",
      cell: ({ row }) => <span>{row.original.petName}</span>,
    },
    {
      accessorKey: "petCategory",
      header: "Owner",
      cell: ({ row }) => <span>{row.original.created_by}</span>,
    },
    {
      accessorKey: "goalAmount",
      header: "Goal",
      cell: ({ row }) => `৳${row.original.targetAmount}`,
    },
    {
      accessorKey: "raisedAmount",
      header: "Raised",
      cell: ({ row }) => `৳${row.original.donatedAmount}`,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) =>
        row.original.paused === false ? (
          <span className="inline-flex items-center gap-1 text-green-600 font-medium">
            <FiCheckCircle /> Active
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-yellow-600 font-medium">
            <FiClock /> Paused
          </span>
        ),
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        const campaign = row.original;

        return (
          <button
            disabled={isLoading}
            onClick={() =>
              handlePause(campaign._id, campaign.paused)
            }
            className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium transition
          ${
            campaign.paused
              ? "bg-green-100 text-green-700 hover:bg-green-200"
              : "bg-red-100 text-red-700 hover:bg-red-200"
          }
        `}
          >
            {campaign.paused ? <FaPlay /> : <FaPause />}
            {campaign.paused ? "Unpause" : "Pause"}
          </button>
        );
      },
    },
  ]);

  const table = useReactTable({
    data: campaigns,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (isLoading) {
    return <LoaddingPage />
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#002169]">
          Donation Campaigns
        </h1>
        <p className="text-gray-500">
          Monitor and manage all donation campaigns
        </p>
      </div>

      {/* TABLE VIEW (md & lg) */}
      <div className="hidden md:block bg-white rounded-xl shadow border overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#f7f4f7]">
            {table.getHeaderGroups().map((group) => (
              <tr key={group.id}>
                {group.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-4 py-3 text-left text-sm font-semibold text-[#002169] cursor-pointer"
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
              <tr key={row.id} className="border-t hover:bg-gray-50 transition">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARD VIEW (sm) */}
      <div className="md:hidden space-y-4">
        {campaigns.map((c) => (
          <div key={c._id} className="bg-white rounded-xl shadow border p-4">
            <h3 className="font-semibold text-[#002169] mb-1">{c.title}</h3>

            <p className="text-sm text-gray-500 mb-2">
              Category: {c.petCategory}
            </p>

            <div className="flex justify-between text-sm mb-2">
              <span>Goal: ৳{c.goalAmount}</span>
              <span>Raised: ৳{c.raisedAmount}</span>
            </div>

            <div className="flex items-center justify-between">
              <span
                className={`text-sm font-medium ${
                  c.status === "active" ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {c.status}
              </span>

              <FaDonate className="text-[#894b8d] text-xl" />
            </div>
          </div>
        ))}

        {campaigns.length === 0 && (
          <p className="text-center text-gray-500">No campaigns found.</p>
        )}
      </div>
    </div>
  );
};

export default AllCampaigns;
