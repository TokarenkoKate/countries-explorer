import { combineReducers } from "@reduxjs/toolkit"
import { countriesData } from "./countries/countries"
import { NameSpace } from "../constants/constants"
import { filtersData } from "./filters/filters"

export const rootReducer = combineReducers({
  [NameSpace.Countries]: countriesData.reducer,
  [NameSpace.Filters]: filtersData.reducer,
})
