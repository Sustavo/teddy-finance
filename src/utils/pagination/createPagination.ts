import { PaginationValues } from "../../components/Pagination";

export function createPagination(
  value: number,
  currentPage: number | undefined
): PaginationValues | undefined {
  if (currentPage === undefined) {
    console.error("Error: currentPage is undefined.");
    return;
  }
  const page = currentPage
  const pages = Array.from({ length: value }, (_, i) => i + 1);
  const nextPage = page < value ? page + 1 : false;
  const previousPage = page > 1 ? page - 1 : false;

  return {
    firstPage: pages[0],
    lastPage: pages[pages.length - 1],
    page: page,
    nextPage: nextPage,
    prevPage: previousPage,
  };
}
