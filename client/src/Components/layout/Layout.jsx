import Header from '../header/Header'
import Contact from '../../pages/contact/Contact'

import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation();
    return(
    <>
    <Header /> 
    <Outlet /> 
    {location.pathname !== "/contact" && <Contact/>} 
    </>
)}

export default Layout
