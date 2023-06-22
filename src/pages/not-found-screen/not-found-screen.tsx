import './not-found-screen.css'
import React from "react"
import Header from "../../components/header/header"
import { Link } from "react-router-dom"
import { Approute } from "../../constants/constants"

function NotFoundScreen() {
  return (
    <div className="page">
      <Header />
      <h1 className='not-found__title'>Sorry, the page you are looking for does&apos;n exist</h1>
      <Link to={Approute.Main} className='not-found__link'>Go the the main page</Link>
    </div>
  )
}

export default NotFoundScreen
