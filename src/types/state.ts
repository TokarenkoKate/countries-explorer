import { SortOrderEnum } from "../constants/constants"
import { store } from "../store/index"
import { CountriesType } from "./countries"

export type CountriesData = {
  countries: CountriesType
  error: boolean
  isLoading: boolean
}

export type FiltersData = {
  sortBy: SortByType
  region: RegionType
  area: AreaType
}

export type RegionType = {
  name: string;
  selected: boolean;
}

export type SortByType = {
  value: string
  order: SortOrderEnum
}

export type AreaType = {
  size: {
    min: number
    max: number
  }
  selected: boolean
}

export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
