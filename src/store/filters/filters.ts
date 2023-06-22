import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { NameSpace, SortOrderEnum } from "../../constants/constants"
import { AreaType, FiltersData, RegionType, SortByType } from "../../types/state"

export const initialState: FiltersData = {
  sortBy: {
    value: "name",
    order: SortOrderEnum.ASC,
  },
  region: {
    name: "Oceania",
    selected: false,
  },
  area: {
    size: {
      min: 0,
      max: 53500,
    },
    selected: false,
  },
}

export const filtersData = createSlice({
  name: NameSpace.Countries,
  initialState,
  reducers: {
    setSortOption: (state, action: PayloadAction<SortByType>) => {
      state.sortBy = action.payload
    },
    selectArea: (state, action: PayloadAction<AreaType>) => {
      state.area = action.payload
    },
    selectRegion: (state, action: PayloadAction<RegionType>) => {
      state.region = action.payload
    },
  },
})

export const { setSortOption, selectArea, selectRegion } = filtersData.actions
