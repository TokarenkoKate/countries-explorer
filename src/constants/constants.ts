export enum Approute {
  Main = "/",
  NotFound = "*",
}

export enum NameSpace {
  Countries = "COUNTRIES",
  Filters = "FILTERS",
}

export enum SortOrderEnum {
  DESC = 'desc',
  ASC = 'asc',
}

export const baseUrl = "https://restcountries.com"

export enum APIRoute {
  Countries = "/v2/all?fields=name,region,area",
}
