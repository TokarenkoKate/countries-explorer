import "./pagination.css"
import React from 'react';
import { useState, useEffect } from "react"
import { getPaginationButtons } from "../../utils/utils"
import useCurrentWidth from "../../hooks/useCurrentWidth"

interface PaginationProps {
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  countriesPerPage: number
  totalCountries: number | undefined
}

function Pagination({
  currentPage,
  setCurrentPage,
  countriesPerPage,
  totalCountries,
}: PaginationProps) {
  const [paginationButtons, setPaginationButtons] = useState<Array<number>>([])
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(false)
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false)
  const width = useCurrentWidth()

  const onClickSelectPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const onClickGoToPrevPage = () => {
    if (!prevButtonDisabled) {
      setCurrentPage((previousSelectedPage) => previousSelectedPage - 1)
    }
  }

  const onClickGoToNextPage = () => {
    if (totalCountries && !nextButtonDisabled) {
      setCurrentPage((previousSelectedPage) => previousSelectedPage + 1)
    }
  }

  useEffect(() => {
    if (totalCountries) {
      if (width >= 380) {
        const amountOfPages = Math.ceil(totalCountries / countriesPerPage)
        const currentButtons = getPaginationButtons(amountOfPages, currentPage)
        setPaginationButtons(currentButtons)
      } else {
        setPaginationButtons([currentPage])
      }
      if (currentPage === 1) {
        setPrevButtonDisabled(true)
        setNextButtonDisabled(false)
      } else if (currentPage === Math.ceil(totalCountries / countriesPerPage)) {
        setNextButtonDisabled(true)
        setPrevButtonDisabled(false)
      } else {
        setPrevButtonDisabled(false)
        setNextButtonDisabled(false)
      }
    }
  }, [totalCountries, currentPage, width])

  return (
    <div className="pagination">
      <div
        className={`pagination__button ${
          prevButtonDisabled ? "pagination__button_disabled" : ""
        }`}
        onClick={onClickGoToPrevPage}
      >
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 9L1 5L5 1"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <ul className="pagination__list">
        {paginationButtons.map((buttonPageNumber, index) => {
          if (buttonPageNumber !== 0) {
            return (
              <li
                className={`pagination__item ${
                  currentPage === buttonPageNumber
                    ? "pagination__item_active"
                    : ""
                }`}
                key={index}
                onClick={() => onClickSelectPage(buttonPageNumber)}
              >
                <p className="pagination__number-text">{buttonPageNumber}</p>
              </li>
            )
          } else {
            return (
              <div
                className="pagination__dots"
                key={index}
              >
                <div className="pagination__dot" />
                <div className="pagination__dot" />
                <div className="pagination__dot" />
              </div>
            )
          }
        })}
      </ul>
      <div
        className={`pagination__button ${
          nextButtonDisabled ? "pagination__button_disabled" : ""
        }`}
        onClick={onClickGoToNextPage}
      >
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L5 5L1 9"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

export default Pagination
