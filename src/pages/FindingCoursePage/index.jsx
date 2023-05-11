import React from 'react'
import '../../assets/styles/FindingCoursePage.css'
import FilterCategory from '../../components/FilterCategory'
import '../../assets/styles/FindingCoursePage.css'
import ClassCard from '../../components/ClassCard'
import Pagination from '../../components/Pagination'
import HowFTWorkAccordion from '../../components/Accordion/HowFTWorkAccordion'
import SearchBar from '../../components/SearchBar'
import FindingClassMessage from '../../components/Message/FindingClassMessage'
function FindingCoursePage() {
    return (
        <div className='finding-course-page_container container-fluid'>
            <hero id="finding-course_hero">
                <div className="columns is-multiline ml-4 mr-4 finding-course_hero">
                    <div className="column is-4 finding-course_hero-left">
                        <img className='finding-course-image' src={require('../../assets/images/11.jpg')} alt="" srcset="" />
                    </div>
                    <div className="column is-8 finding-course_hero-right">
                        <strong className='is-size-3'>
                            Tìm kiếm lớp học tiếng Anh cho riêng bạn <br />
                            Học, rèn luyện và kết nối với giáo viên của chúng tôi
                        </strong>
                        <br/>
                        <SearchBar  />
                        <br/>
                        <div className="columns is-multiline">

                            <FilterCategory />
                            <FilterCategory />
                            <FilterCategory />
                            <FilterCategory />
                        </div>
                    </div>
                </div>
            </hero>
            <br/>
            <section className="finding-course_section-1 ">
                <div className="columns is-multiline">
                    <div className="column is-1"></div>
                    <div className="column is-10">
                        <div className="columns is-multiline">
                            <ClassCard />
                            <ClassCard />
                            <ClassCard />
                            <ClassCard />
                            <ClassCard />
                            <ClassCard />
                            <ClassCard />
                            <ClassCard />
                        </div>
                    </div>
                    <div className="column is-1"></div>


                </div>
                <Pagination />
            </section>
            <br />
            <section className="finding-course_section-2 container">
                <br />
                <strong className='is-size-4'>Làm sao để tìm kiếm lớp học ?</strong>
                <div className="columns is-multiline mt-3 mb-3 is-centered">
                        <FindingClassMessage
                         title='Bước 1 '
                         content='Nhập từ khóa vào thanh tìm kiếm hoặc chọn lựa từ bộ lọc  ' 
                         color='is-success'
                        />
                        <FindingClassMessage
                         title='Bước 2 '
                         content='Lựa chọn lớp học và đăng kí học thử ' 
                         color='is-success'
                         />
                        <FindingClassMessage
                         title='Bước 3 '
                         content='Đăng kí lớp học bạn mong muốn và thanh toán ' 
                         color='is-success'
                        />
                         <FindingClassMessage
                         title='Bước 4 '
                         content='Tham gia lớp học và tận hưởng hành trình của bạn  ' 
                         color='is-success'
                        />
                    </div>
                
            </section>
            <br />
            {/* <section className="finding-course_section-3">
                <p>section-3</p>
            </section>
            <section className="finding-course_section-4">
                <p>section-4</p>
            </section> */}
        </div>
    )
}

export default FindingCoursePage