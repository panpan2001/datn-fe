import  { Suspense ,lazy} from 'react'
import '../assets/styles/Layout.css'
const Navbar =lazy(() => import('../components/Navbar'))
const Footer = lazy(() => import('../components/Footer'))
const MainLayout = ({ children }) => {
    return (
        <Suspense  >
        <div className='layout_container container-fluid'>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
        </Suspense>
    )
}
export default MainLayout