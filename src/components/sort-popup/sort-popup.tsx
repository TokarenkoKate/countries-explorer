import "./sort-popup.css"
import React from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../hooks/redux"
import { setSortOption } from "../../store/filters/filters"
import { getSortByData } from "../../store/filters/selectors"
import { SortByType } from "../../types/state"
import { SortOrderEnum } from "../../constants/constants"

function SortPopup({ closePopup }: { closePopup: () => void }) {
  const dispatch = useDispatch()
  const sortBy: SortByType = useAppSelector(getSortByData)

  const setActiveSortOption = (sortValue: SortOrderEnum) => {
    dispatch(setSortOption({ ...sortBy, order: sortValue }))
    closePopup()
  }

  return (
    <div className="sort-popup">
      <p className="sort-popup__title">Sort By</p>
      <p className="sort-popup__subtitle">
        {sortBy.value[0].toUpperCase() + sortBy.value.slice(1)}
      </p>
      <div className="sort-popup__options">
        <div
          className={`sort-popup__option ${
            sortBy.order === SortOrderEnum.ASC
              ? "sort-popup__option_active"
              : ""
          }`}
          onClick={() => setActiveSortOption(SortOrderEnum.ASC)}
        >
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6666 1H1.33325L6.66659 7.30667V11.6667L9.33325 13V7.30667L14.6666 1Z"
              stroke="#64748B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="sort-popup__option-title">From A to Z</p>
        </div>
        <div
          className={`sort-popup__option ${
            sortBy.order === SortOrderEnum.DESC
              ? "sort-popup__option_active"
              : ""
          }`}
          onClick={() => setActiveSortOption(SortOrderEnum.DESC)}
        >
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6666 1H1.33325L6.66659 7.30667V11.6667L9.33325 13V7.30667L14.6666 1Z"
              stroke="#64748B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="sort-popup__option-title">From Z to A</p>
        </div>
      </div>
    </div>
  )
}

export default SortPopup
