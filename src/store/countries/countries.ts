import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchCountriesAction } from "../asyncActions"
import { CountriesData } from "../../types/state"
import { CountriesType } from "../../types/countries"
import { NameSpace } from "../../constants/constants"

export const initialState: CountriesData = {
  countries: [],
  error: false,
  isLoading: false,
}

export const countriesData = createSlice({
  name: NameSpace.Countries,
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = false
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCountriesAction.pending, (state) => {
        state.isLoading = true
        state.error = false
      })
      .addCase(fetchCountriesAction.fulfilled, (state, action: PayloadAction<CountriesType>) => {
        state.isLoading = false
        state.countries = action.payload
      })
      .addCase(fetchCountriesAction.rejected, (state) => {
        state.isLoading = false
        state.error = true
      })
  },
})

export const { clearError } = countriesData.actions
