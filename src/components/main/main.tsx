import React from 'react';
import Filters from "../../components/filters/filters"
import Countries from "../../components/countries/countries"

function Main(): JSX.Element {
  return (
    <main className="main">
      <Filters />
      <Countries />
    </main>
  )
}

export default Main
