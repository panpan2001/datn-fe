import React, { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'
import '../../assets/styles/AdminManagementLayout.css'
const AdminSidebar = React.lazy(() => import('../../components/AdminSidebar'))
function AdminManagementLayout({ children }) {
    return (
        <Suspense>
            <div className="admin-management-layout_container container-fluid  ">
                <div className="columns pt-1 pb-1 ">
                    <div className="column is-2 admin-management-sidebar_container">
                        <AdminSidebar />
                    </div>
                    <main className="column admin-management-display_container">
                        <Outlet/>
                    </main>
                </div>
            </div>

        </Suspense>

    )
}

export default AdminManagementLayout