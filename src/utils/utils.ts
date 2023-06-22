import { SortOrderEnum } from "../constants/constants"
import { CountriesType } from "../types/countries"

export const filterByRegion = (
  countries: CountriesType,
  regionName: string
) => {
  return countries.filter((country) => country.region === regionName)
}

export const filterByMaxSize = (countries: CountriesType, maxSize: number) => {
  return countries.filter((country) => country.area < maxSize)
}

export const sortAlphabetically = (
  countries: CountriesType,
  sortingOrder: SortOrderEnum
) => {
  const countriesToSort = [...countries]
  if (sortingOrder === SortOrderEnum.ASC) {
    countriesToSort.sort((a, b) => a.name.localeCompare(b.name))
  } else {
    countriesToSort.sort((a, b) => b.name.localeCompare(a.name))
  }
  return countriesToSort
}

export const getPaginationButtons = (amountOfPages: number, activePage: number) => {
  const pageNumbers = []

  if (amountOfPages < 10) {
    for (let i = 1; i <= amountOfPages; i++) {
      pageNumbers.push(i)
    }
  } else if (activePage < 5) {
    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(i)
    }
    pageNumbers.push(0)
    pageNumbers.push(amountOfPages)
  } else if (activePage > amountOfPages - 4) {
    pageNumbers.push(1)
    pageNumbers.push(0)
    for (let i = amountOfPages - 4; i <= amountOfPages; i++) {
      pageNumbers.push(i)
    }
  } else {
    pageNumbers.push(1)
    pageNumbers.push(0)
    pageNumbers.push(activePage - 1)
    pageNumbers.push(activePage)
    pageNumbers.push(activePage + 1)
    pageNumbers.push(0)
    pageNumbers.push(amountOfPages)
  }

  return pageNumbers
}