import React, { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'

const AdminSidebar = React.lazy(() => import('../../components/AdminSidebar'))
function AdminManagementLayout({ children }) {
    return (
        <Suspense>
            <div className="admin-management-layout_container container-fluid ">
                <div className="columns">
                    <div className="column is-2 admin-management-sidebar_container">
                        <AdminSidebar />
                    </div>
                    <main className="column admin-management-display_container">
                        {children}
                    </main>
                </div>
            </div>

        </Suspense>

    )
}

export default AdminManagementLayout