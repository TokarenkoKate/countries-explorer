import React from 'react';
import { Country } from "../../types/countries"

function CountryRow({ name, region, area }: Country) {
  const formattedArea = area ? area.toLocaleString("en-US") : "n/a"
  return (
    <ul className="countries-table__row">
      <li className="countries-table__list-item countries-table__list-item_bold">
        {name}
      </li>
      <li className="countries-table__list-item countries-table__list-item_bold">
        {region}
      </li>
      <li className="countries-table__list-item countries-table__list-item_bold">
        {formattedArea}
      </li>
    </ul>
  )
}

export default CountryRow
