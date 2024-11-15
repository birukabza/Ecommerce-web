import Header from '../header/Header'
import Contanct from '../../pages/contact/Contanct'

import { Outlet } from 'react-router-dom'

const Layout = () => (
    <>
    <Header /> 
    <Outlet />  
    <Contanct/>
    </>
)

export default Layout
