
'use client'
import ReactPaginate from 'react-paginate';
import { useParams, useSearchParams } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PaginatedItems({ pageSize = 10, itemNumber = 1, onPageChange = () => { } }) {
    const searchParams = useSearchParams();
    console.log()

    const pageCount = Math.ceil(Number(itemNumber) / pageSize);
    let page = searchParams.get("page")
    if (pageCount < 1) {
        return null;
    }


    return (
        <ReactPaginate
            previousLabel={<ChevronLeft />}
            nextLabel={<ChevronRight />}
            breakLabel="..."
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={onPageChange}
            containerClassName="flex justify-center items-center mt-[58px] px-4 h-[32px]"
            pageClassName="mx-1  p-1 px-2 hover:bg-gray-100 rounded-lg Transition cursor-pointer"
            activeClassName="text-gray-300 border-primary font-normal  rounded-lg shadow-md border   h-[32px] w-[32px] text-center"
            previousClassName="text-2xl"
            nextClassName="text-2xl"
            breakClassName="text-gray-500 "
            disabledClassName="opacity-50"
            forcePage={page ? page - 1 : 0}
        />
    );
}