import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

const Layout = ({currentUser}) => (
    <>
    <Header currentUser = {currentUser}/> 
    <Outlet />  
    </>
)

export default Layout
