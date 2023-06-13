import React, { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'
import '../../assets/styles/AdminManagementLayout.css'
import { BiBell } from 'react-icons/bi'
import SearchBar from '../../components/SearchBar'
import { useSelector } from 'react-redux'
const AdminSidebar = React.lazy(() => import('../../components/AdminSidebar'))
function AdminManagementLayout({ children }) {
    const user= useSelector((state) => state.login.login?.currentUser)
    // console.log("user.full_name.split",user.full_name.split(" ").slice(-1))
    return (
        <Suspense>
            <div className="admin-management-layout_container container-fluid  ">
                <div className="columns is-multiline pt-1 pb-1 ">
                    <div className="column is-2 admin-management-sidebar_container">
                        <AdminSidebar />
                    </div>
                    <div className="column is-10 pt-3 admin-management-display_container">
                        <header className='admin-management-header'>
                            {/* <div className='admin-management-header_left'>
                                <p>Xin chào, Nhật.</p>
                                <p> Hôm nay là ngày {new Date().toLocaleDateString()}</p>
                            </div> */}
                            <SearchBar width={"30rem"} />
                            <div className="admin-management-header_right">
                                <BiBell style={{ width: "1.5rem", height: "1.5rem" }} />
                                <img src={user.avatar||require('../../assets/images/logo.jpg')} alt="" srcset=""
                                    style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%" }}
                                />
                                <div>
                                    <p>Xin chào, {user.full_name.split(" ").slice(-1)}</p>
                                    {/* <p>{user.email}</p> */}
                                </div>
                            </div>
                        </header>
                        <Outlet />
                    </div>
                </div>
            </div>

        </Suspense>

    )
}

export default AdminManagementLayout