import React from "react";

interface PaginationProps {
  petsPerPage: number;
  totalPets: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  petsPerPage,
  totalPets,
  paginate,
  currentPage,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPets / petsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-4">
      <ul className="inline-flex -space-x-px">
        {pageNumbers.map((number) => (
          <li key={number} className={`cursor-pointer ${number === currentPage ? 'bg-[#003459] text-white' : 'bg-gray-300'}`}>
            <a
              onClick={() => paginate(number)}
              className="px-3 py-2 leading-tight text-[#003459] font-semibold bg-white border border-[#003459] rounded-md hover:bg-gray-100 hover:text-gray-700"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
