"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, Pencil, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { createAuthenticatedAxiosInstance } from "@/utils/protected-axios";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { MACHINE } from "@/types";
import AddNewMachine from "./add-new-machine";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UpdateMachineDailog from "./update-machine";
import DeleteDialog from "../shared/delete-dailog";

type Props = {
  data: MACHINE[];
  token: string;
  setIsReloaded: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MachineDataTable({ data, token, setIsReloaded }: Props) {
  const userType = useSelector((state: RootState) => state.auth.userType);
  const id = useSelector((state: RootState) => state.auth._id);
  const [selectedMachine, setSelectedMachine] = React.useState<
    MACHINE | undefined
  >(undefined);

  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [openUpdateDialog, setOpenUpdateDialog] = React.useState(false);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const axiosInstance = createAuthenticatedAxiosInstance({}, token);

  let columns: ColumnDef<MACHINE>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            className=" cursor-pointer"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Machine Name
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize w-[100px]">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "type",
      header: ({ column }) => {
        return (
          <Button
            className=" cursor-pointer"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Machine Type
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="w-[100px]">{<Badge>{row.original.type}</Badge>}</div>
      ),
    },
    {
      accessorKey: "grade",
      header: ({ column }) => {
        return (
          <Button
            className=" cursor-pointer"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Grade
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => {
        return <div className="">{row.original.grade}</div>;
      },
    },
    {
      accessorKey: "bagSize",
      header: ({ column }) => {
        return (
          <Button
            className=" cursor-pointer"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Bag Size
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => {
        return <div className="">{row.original.bagSize}</div>;
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger className=" cursor-pointer" asChild>
              <Button variant={"outline"}>...</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  setOpenUpdateDialog(true);
                  setSelectedMachine(row.original);
                }}
                variant="default"
                className="w-full flex items-center justify-between cursor-pointer"
              >
                Update <Pencil />
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setOpenDeleteDialog(true);
                  setSelectedMachine(row.original);
                }}
                variant="default"
                className="w-full flex items-center justify-between cursor-pointer"
              >
                Delete <Trash />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const deleteHandler = async(id:string)=>{
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-4">
        <Input
          placeholder="Filter name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <AddNewMachine token={token} />
      </div>

      <div className="">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className=" font-semibold" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>

      {openDeleteDialog && selectedMachine && (
        <DeleteDialog
          id={selectedMachine.id}
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          deleteHandler={deleteHandler}
        />
      )}

      {openUpdateDialog && selectedMachine && (
        <UpdateMachineDailog
          data={selectedMachine}
          open={openUpdateDialog}
          setOpen={setOpenUpdateDialog}
          token={token}
          setReloadedTableData={setIsReloaded}
        />
      )}
    </div>
  );
}
