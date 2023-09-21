import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'
import {Loader} from "react-loaders"


const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">

        <Outlet />
       
      </div>
      <Loader type="pacman"/>

    </div>
  )
}

export default Layout
