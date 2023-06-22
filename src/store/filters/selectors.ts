import { AreaType, RegionType, SortByType, State } from "../../types/state"
import { NameSpace } from "../../constants/constants"

export const getSortByData = (state: State): SortByType =>
  state[NameSpace.Filters].sortBy
export const getRegionData = (state: State): RegionType =>
  state[NameSpace.Filters].region
export const getAreaData = (state: State): AreaType =>
  state[NameSpace.Filters].area
