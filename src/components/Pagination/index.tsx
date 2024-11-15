import { useEffect, useState } from "react";
import { buttonStyle, MainContainer, PaginationTextActive, textStyle, ThreeDotsText } from "./style";
import { createPagination } from "../../utils/createPagination";
import Button from "../Button";

export interface PaginationValues {
    firstPage: number;
    lastPage: number;
    page: number;
    nextPage: number | false;
    prevPage: number | false;
}

interface PaginationProps {
    page: number;
    totalPages: number;
    handleFirstPage: () => void;
    handleLastPage: () => void;
    handleNextPage: () => void;
    handlePrevPage: () => void;
}

export default function Pagination({ page, totalPages, handleFirstPage, handleLastPage, handleNextPage, handlePrevPage }: PaginationProps) {
    const [paginationValues, usePaginationValues] = useState<PaginationValues>()

    useEffect(() => {
        usePaginationValues(createPagination(totalPages, page))
    }, [page, totalPages])

    return (
        <MainContainer>
            {
                paginationValues?.prevPage && (
                    <>
                        <Button onPress={handleFirstPage}
                            buttonStyle={buttonStyle} textStyle={textStyle}
                        >{paginationValues?.firstPage}</Button>
                        {
                            !(paginationValues?.firstPage === paginationValues?.prevPage) && (
                                <>
                                    <ThreeDotsText>...</ThreeDotsText>
                                    <Button onPress={handlePrevPage}
                                        buttonStyle={buttonStyle} textStyle={textStyle}
                                    >{paginationValues?.prevPage}</Button>
                                </>
                            )
                        }
                    </>
                )
            }
            <PaginationTextActive>{page}</PaginationTextActive>
            {
                paginationValues?.nextPage && (
                    <>
                        <Button onPress={handleNextPage}
                            buttonStyle={buttonStyle} textStyle={textStyle}
                        >{paginationValues?.nextPage}</Button>
                        {!(paginationValues?.nextPage === paginationValues?.lastPage) && (
                            <>
                                <ThreeDotsText>...</ThreeDotsText>
                                <Button onPress={handleLastPage}
                                    buttonStyle={buttonStyle} textStyle={textStyle}
                                >{paginationValues?.lastPage}</Button>
                            </>
                        )}
                    </>
                )
            }
        </MainContainer>
    )
}

