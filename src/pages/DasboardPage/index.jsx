import React from 'react'
import '../../assets/styles/DashboardPage.css'
import { BiSearch } from 'react-icons/bi'
import { CiUser } from 'react-icons/ci'
import { AiOutlineUser, AiTwotoneDatabase } from 'react-icons/ai'
import { BsFillFileSpreadsheetFill, BsFillPersonLinesFill, BsFillPersonVcardFill, BsPersonCircle, BsReceipt } from 'react-icons/bs'
import Table from '../../components/Table'

function DashboardPage() {
  return (
    <div className='dashboard-page_container container-fluid'>
      {/* <AdminManagementLayout/> */}
      <section className="dashboard_section-1 mb-3">
        <div className="columns is-multiline">
          <div className="column one-fifth ">
            <div className='dashboard-section-1_column1'>
              <div className='dashboard-section-1_icon'>
                <BsPersonCircle style={{ width: "1.5rem", height: "1.5rem" }} />
                <strong className='is-size-5'>5</strong>
              </div>
              <p className='is-size-6'>Tài khoản sử dụng</p>
            </div>
          </div>
          <div className="column one-fifth ">
            <div className='dashboard-section-1_column2'>
              <div className='dashboard-section-1_icon'>
                <BsFillPersonVcardFill style={{ width: "1.5rem", height: "1.5rem" }} />
                <strong className='is-size-5'>5</strong>

              </div>
              <p className='is-size-6'>Học viên</p>

            </div>
          </div>
          <div className="column one-fifth ">
            <div className='dashboard-section-1_column3'>
              <div className='dashboard-section-1_icon'>
                <BsFillPersonLinesFill style={{ width: "1.5rem", height: "1.5rem" }} />
                <strong className='is-size-5'>5</strong>

              </div>
              <p className='is-size-6'>Giáo viên</p>

            </div></div>
          <div className="column one-fifth ">
            <div className='dashboard-section-1_column4'>
              <div className='dashboard-section-1_icon'>
                <BsFillFileSpreadsheetFill style={{ width: "1.5rem", height: "1.5rem" }} />
                <strong className='is-size-5'>5</strong>

              </div>
              <p className='is-size-6'>Khóa học chính thức</p>

            </div>
          </div>
          <div className="column one-fifth ">
            <div className='dashboard-section-1_column5'>
              <div className='dashboard-section-1_icon'>
                <BsReceipt style={{ width: "1.5rem", height: "1.5rem" }} />
                <strong className='is-size-5'>5</strong>

              </div>
              <p className='is-size-6'>Khóa học thử</p>

            </div>
          </div>
        </div>
      </section>
      <section className="dashboard_section-2 mb-3">
      </section>
      <section className="dashboard_section-3 mb-3"></section>
      <section className="dashboard_section-4 mb-3"></section>
      <section className="dashboard_section-5 mb-3"></section>
    </div>
  )
}

export default DashboardPage