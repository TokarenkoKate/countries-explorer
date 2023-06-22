import "./filters.css"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../hooks/redux"
import { getAreaData, getRegionData } from "../../store/filters/selectors"
import { selectArea, selectRegion } from "../../store/filters/filters"
import { AreaType, RegionType } from "../../types/state"
import SortPopup from "../sort-popup/sort-popup"

function Filters() {
  const dispatch = useDispatch()

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const regionData: RegionType = useAppSelector(getRegionData)
  const areaData: AreaType = useAppSelector(getAreaData)

  const onClickToggleSelectRegion = () => {
    dispatch(selectRegion({ ...regionData, selected: !regionData.selected }))
  }
  const onClickToggleSelectArea = () => {
    dispatch(selectArea({ ...areaData, selected: !areaData.selected }))
  }
  const onClickToggleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen)
  }
  const closePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <section className="filters">
      <div className="filters__row filters__row_left">
        <button
          className={`filter__button filter__button_type_checkbox ${
            areaData.selected ? "filter__button_type_checkbox_active" : ""
          }`}
          onClick={onClickToggleSelectArea}
        >
          Smaller than Lithuania
        </button>
        <button
          className={`filter__button filter__button_type_checkbox ${
            regionData.selected ? "filter__button_type_checkbox_active" : ""
          }`}
          onClick={onClickToggleSelectRegion}
        >
          {`${regionData.name} region`}
        </button>
      </div>
      <div
        className="filters__row filters__row_right"
        onClick={onClickToggleOpenPopup}
      >
        <button
          className={`filter__button filter__button_type_open-popup ${
            isPopupOpen ? "filter__button_type_open-popup_active" : ""
          }`}
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
          <p className="filters__button-title">Sort</p>
        </button>
      </div>
      {isPopupOpen && <SortPopup closePopup={closePopup} />}
    </section>
  )
}

export default Filters
