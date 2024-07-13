import { useState } from "react";

interface Pagination {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (pageNumber: number) => void;
  generatePageNumbers: (totalPages: number) => number[];
}

export const usePagination = (initialPage: number = 1): Pagination => {
  const [page, setPage] = useState(initialPage);

  const nextPage = () => setPage((prevPage) => prevPage + 1);
  const prevPage = () =>
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  const goToPage = (pageNumber: number) => setPage(pageNumber);

  const generatePageNumbers = (totalPages: number) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return { page, nextPage, prevPage, goToPage, generatePageNumbers };
};
