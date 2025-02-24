"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  Ban,
  ChevronDown,
  ExternalLink,
  Eye,
  FileText,
  Image,
  Loader,
  MonitorPlay,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PaginatedItems from "./pagination";
import EmptyData from "./empty-data";
import UseSearchParamsHook from "@/hooks/use-search-params";

export function DataTableDemo({
  isPending = false,
  data = [],
  columns = [],
  onDelete ,
  onEdit ,
  onView ,
  onBlock ,
  onPagination = ()=>{},
  pagination=10,
  count=10,
}) {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const {addQueryString } = UseSearchParamsHook()
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
const handlePageChange = (e) => {
 addQueryString("page",e.selected+1)
  }


  return (
    <div className="w-full">
      {/* Table */}
      <div className="border border-b-0 rounded-tl-[8px] rounded-tr-[8px]">
        <Table>
          <TableHeader className="bg-white-table   dark:bg-[#242424] ">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(
                  (header) => (
                    (
                      <TableHead
                        key={header.id}
                        className={`text-primary dark:text-[#A7A7A7] text-sm font-medium px-4 py-2  ${header.column.columnDef.className}`}
                      >
                        {header.column.columnDef.id === "select" ? (
                          <Checkbox
                            checked={
                              table.getIsAllPageRowsSelected() ||
                              (table.getIsSomePageRowsSelected() &&
                                "indeterminate")
                            }
                            onCheckedChange={(value) =>
                              table.toggleAllPageRowsSelected(!!value)
                            }
                            aria-label="Select all"
                          />
                        ) : (
                          flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )
                        )}
                      </TableHead>
                    )
                  )
                )}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isPending ? (
              <TableRow className="w-full">
                <TableCell
                  colSpan={columns.length}
                  className="h-[60vh] flex items-center justify-center"
                >
                  <div className="animate-spin text-gray-400 dark:text-[#B6B6B6] text-4xl flex justify-center">
                    <Loader />
                  </div>
                </TableCell>
              </TableRow>
            ) : table.getRowModel()?.rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells()?.map((cell) => (
                    <TableCell
                      key={cell.column.id}
                      className={`${cell.column.columnDef.className} text-gray-300 dark:text-[#B6B6B6] text-sm font-normal px-4 py-4`}
                    >
                      {cell.column.columnDef.id === "actions" ? (
                        <div className="flex items-center justify-center space-x-2">
                          {onEdit ?(
                            <Pencil size={14} strokeWidth={1.5} onClick={() => onEdit(row.original)} />
                          ):null}
                          {onDelete ? (
                            <Trash2 size={14} strokeWidth={1.5} onClick={() => onDelete(row.original)} />
                          ):null}
                           {onBlock ? (
                            <Ban  size={14} strokeWidth={1.5} onClick={() => onBlock(row.original)} color={row?.original?.is_blocked||row?.original?.is_hidden?"#EC232B":"#8A8A8A"}/>
                          ):null}
                          {onView ?(<Eye  size={14} strokeWidth={1.5} onClick={() => onView(row.original)}/>):null}
                         
                        </div>
                      ) : cell.column.columnDef.id === "select" ? (
                        <Checkbox
                          checked={row.getIsSelected()}
                          onCheckedChange={(value) =>
                            row.toggleSelected(!!value)
                          }
                          aria-label="Select row"
                        />
                      ) :cell.column.columnDef.id === "image"?(
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <Image color="#BF9E5C" onClick={()=>{
                          window.open(cell.row.original.image)
                        }} />
                      ): cell.column.columnDef.id === "pdf"?(
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <FileText color="#BF9E5C"  onClick={()=>{
                          window.open(cell.row.original.pdf)
                        }} />
                      ):cell.column.columnDef.id === "video"?(
                        <MonitorPlay  color="#BF9E5C" onClick={()=>{
                          window.open(cell.row.original.video)
                        }}/>
                      ):cell.column.columnDef.id === "link"?(
                        <ExternalLink color="#BF9E5C" onClick={()=>{
                          window.open(cell.row.original.link)
                        }}/>
                      ):
                      (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-[70vh] text-center"
                >
                 <EmptyData/>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination */}
      {onPagination&&(
     <PaginatedItems
        pageSize={pagination}
        itemNumber={count}
        onPageChange={handlePageChange}
     />
      )}
    </div>
  );
}