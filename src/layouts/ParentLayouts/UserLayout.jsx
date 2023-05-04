import  { Suspense ,lazy} from 'react'
import '../../assets/styles/Layout.css'
import { Outlet } from 'react-router-dom'

const Navbar =lazy(() => import('../../components/Navbar'))
const Footer = lazy(() => import('../../components/Footer'))
const UserLayout = ({ children }) => {
    return (
        <Suspense  >
        <div className='user-layout_container container-fluid'>
            <header>
            <Navbar />

            </header>
            {/* <main >{children}</main> */}
            <main >
                <Outlet/>
            </main>

            <footer>
            <Footer />

            </footer>
        </div>
        </Suspense>
    )
}
export default UserLayout