import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => (
    <>
    <Header /> 
    <Outlet />  
    </>
)

export default Layout
