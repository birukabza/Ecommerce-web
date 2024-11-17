import Header from '../header/Header'
import Contanct from '../../pages/contact/Contact'

import { Outlet } from 'react-router-dom'

const Layout = () => (
    <>
    <Header /> 
    <Outlet />  
    <Contanct/>
    </>
)

export default Layout
