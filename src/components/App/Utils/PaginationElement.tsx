import { Pagination } from 'flowbite-react';
import { useEffect, useState } from 'react';

interface PaginationProps {
  setNbpage: React.Dispatch<React.SetStateAction<number>>;
  search: string;
}

export default function PaginationElement({ setNbpage, search }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  useEffect(() => {
    setNbpage(currentPage);
  }, [currentPage]);

    useEffect(() => {
      setCurrentPage(1);
    }, [search]);

  return (
    <div className=" pagination flex sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
      />
    </div>
  );
}
