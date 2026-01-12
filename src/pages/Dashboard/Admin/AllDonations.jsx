import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";




const AllDonations = () => {
  const [sorting, setSorting] = useState([]);
  const axiosSecure = useAxiosSecure;
  const { user} = useAuth();

const {isLoading, data: myDonations = []} = useQuery({
    queryKey:['myDonations'],
    enabled: !!user?.email,
    queryFn: async() => {
      const res = await axiosSecure.get(`/donations/user/${user.email}`);
      return res.data;
    }
  })

 console.log(myDonations);
  // const columns = useMemo(
  //   () => [
  //     {
  //       header: "SL",
  //       cell: (info) => info.row.index + 1,
  //     },
  //     {
  //       accessorKey: "donorName",
  //       header: "Donor",
  //       cell: ({ row }) => (
  //         <div>
  //           <p className="font-medium">{row.original.donorName}</p>
  //           <p className="text-xs text-gray-500">
  //             {row.original.donorEmail}
  //           </p>
  //         </div>
  //       ),
  //     },
  //     {
  //       accessorKey: "campaignTitle",
  //       header: "Campaign",
  //     },
  //     {
  //       accessorKey: "amount",
  //       header: "Amount",
  //       cell: (info) => (
  //         <span className="font-semibold text-[#894b8d]">
  //           ৳{info.getValue()}
  //         </span>
  //       ),
  //     },
  //     {
  //       accessorKey: "paymentMethod",
  //       header: "Payment",
  //     },
  //     {
  //       accessorKey: "createdAt",
  //       header: "Date",
  //       cell: (info) =>
  //         new Date(info.getValue()).toLocaleDateString(),
  //     },
  //   ],
  //   []
  // );

  // const table = useReactTable({
  //   data: donations,
  //   columns,
  //   state: { sorting },
  //   onSortingChange: setSorting,
  //   getCoreRowModel: getCoreRowModel(),
  //   getSortedRowModel: getSortedRowModel(),
  // });

  if (isLoading) {
    return <p className="text-center mt-10">Loading donations...</p>;
  }

  return (
    <div className="p-6">
      {/* Header */}
      {/* <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#002169]">
          All Donations
        </h1>
        <p className="text-gray-500">
          Track every donation made on PetBuddy
        </p>
      </div> */}

      {/* TABLE VIEW (md & lg) */}
      {/* <div className="hidden md:block bg-white rounded-xl shadow border overflow-x-auto">
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
      </div> */}

      {/* MOBILE CARD VIEW */}
      {/* <div className="md:hidden space-y-4">
        {donations.map((d) => (
          <div
            key={d._id}
            className="bg-white rounded-xl shadow border p-4"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-[#002169]">
                {d.donorName}
              </h3>
              <FaMoneyBillWave className="text-[#894b8d] text-xl" />
            </div>

            <p className="text-sm text-gray-500">
              {d.donorEmail}
            </p>

            <p className="text-sm mt-2">
              Campaign:{" "}
              <span className="font-medium">
                {d.campaignTitle}
              </span>
            </p>

            <div className="flex justify-between mt-3 text-sm">
              <span className="font-semibold text-[#894b8d]">
                ৳{d.amount}
              </span>
              <span className="text-gray-500">
                {new Date(d.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}

        {donations.length === 0 && (
          <p className="text-center text-gray-500">
            No donations found.
          </p>
        )}
      </div> */}
    </div>
  );
};

export default AllDonations;
