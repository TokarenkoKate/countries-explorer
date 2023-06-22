import "./countries.css"
import React, { useState, useEffect } from "react"
import { CountriesType } from "../../types/countries"
import { useAppSelector } from "../../hooks/redux"
import {
  getAllCountries,
  getCountriesLoadingStatus,
} from "../../store/countries/selectors"
import {
  getAreaData,
  getRegionData,
  getSortByData,
} from "../../store/filters/selectors"
import {
  filterByMaxSize,
  filterByRegion,
  sortAlphabetically,
} from "../../utils/utils"
import Pagination from "../pagination/pagination"
import CountryRow from "../country-row/country-row"
import CountryLoader from "../country-loader/country-loader"

const countriesPerPage = 10

function Countries() {
  const [currentCountries, setCurrentCountries] = useState<CountriesType>()
  const [currentPage, setCurrentPage] = useState(1)

  const allCountries = useAppSelector(getAllCountries)
  const countriesLoadingStatus = useAppSelector(getCountriesLoadingStatus)
  const regionData = useAppSelector(getRegionData)
  const areaData = useAppSelector(getAreaData)
  const sortByData = useAppSelector(getSortByData)

  const filterCurrentCountries = (countries: CountriesType) => {
    let filteredCountries = [...countries]

    if (regionData.selected) {
      filteredCountries = filterByRegion(filteredCountries, regionData.name)
    }
    if (areaData.selected) {
      filteredCountries = filterByMaxSize(filteredCountries, areaData.size.max)
    }
    return filteredCountries
  }

  useEffect(() => {
    if (!currentCountries) {
      setCurrentCountries(allCountries)
    } else {
      let filteredCountries = filterCurrentCountries(allCountries)
      filteredCountries = sortAlphabetically(
        filteredCountries,
        sortByData.order
      )
      setCurrentCountries(filteredCountries)
    }
    setCurrentPage(1)
  }, [allCountries, regionData.selected, areaData.selected, sortByData.order])

  const lastCountryIndex = currentPage * countriesPerPage
  const firstCountryIndex = lastCountryIndex - countriesPerPage
  const countriesInCurrentPage = currentCountries?.slice(
    firstCountryIndex,
    lastCountryIndex
  )

  return (
    <section className="counties">
      {currentCountries && (
        <h2 className="countries__title">{`Found ${currentCountries?.length} countries`}</h2>
      )}
      <div className="countries-table">
        <div className="countries-table__head">
          <ul className="countries-table__row countries-table__row_title">
            <li className="countries-table__list-item">
              <p>Country name</p>
            </li>
            <li className="countries-table__list-item">
              <p>Region</p>
            </li>
            <li className="countries-table__list-item">
              <p>
                Area size
                <span>
                  , km<sup>2</sup>
                </span>
              </p>
            </li>
          </ul>
        </div>
        <div className="counties-table__body">
          {!countriesLoadingStatus && countriesInCurrentPage ? (
            countriesInCurrentPage.map((country) => (
              <CountryRow
                {...country}
                key={country.name}
              />
            ))
          ) : (
            <>
              <CountryLoader />
              <CountryLoader />
              <CountryLoader />
              <CountryLoader />
              <CountryLoader />
            </>
          )}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        countriesPerPage={countriesPerPage}
        totalCountries={currentCountries?.length}
      />
    </section>
  )
}

export default Countries
