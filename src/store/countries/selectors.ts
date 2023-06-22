import { State } from '../../types/state';
import { CountriesType } from '../../types/countries';
import { NameSpace } from '../../constants/constants';

export const getAllCountries = (state: State): CountriesType => state[NameSpace.Countries].countries;
export const getCountriesLoadingStatus = (state: State): boolean => state[NameSpace.Countries].isLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Countries].error;
