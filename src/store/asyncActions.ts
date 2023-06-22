import { createAsyncThunk } from "@reduxjs/toolkit"
import { AppDispatch, State } from "../types/state"
import { CountriesType } from "../types/countries"
import { APIRoute, baseUrl } from "../constants/constants"

export const fetchCountriesAction = createAsyncThunk<
  CountriesType,
  undefined,
  {
    dispatch: AppDispatch
    state: State
  }
>("LOAD_COUNTRIES", async (_arg, { rejectWithValue }) => {
  try {
    const response = await fetch(baseUrl + APIRoute.Countries)
    const data = await response.json()
    return data
  } catch (err) {
    return rejectWithValue("Something went wrong")
  }
})
