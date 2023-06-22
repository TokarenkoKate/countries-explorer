import React from "react"
import "./header.css"

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Countries explorer</h1>
      <p className="header__subtitle">
        This is a list of the world&apos;s countries and their region and total
        size.
      </p>
    </header>
  )
}

export default Header
