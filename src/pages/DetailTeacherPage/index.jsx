import React from 'react'
import TeacherShortInfoRight from '../../components/TeacherShortInfoCard/TeacherShortInfoRight'
import '../../assets/styles/DetailTeacherPage.css'
import TeacherShortInfoLeft from '../../components/TeacherShortInfoCard/TeacherShortInfoLeft'
function DetailTeacherpage() {
    return (
        <div className='detail-teacher-page container-fluid '>
            <div className="detail-teacher column is-9">
                <div className="info-teacher column is-centered is-10">

                    <TeacherShortInfoLeft />
                </div>
                <div className="teacher-description column is-10 ">
                    <strong className='is-size-5'>Về giáo viên</strong>
                    <hr/>
                    <p className='teacher-description_paragraph'> 
                    Hello, my name is Jessica and I'm from the US! I'm 23 years old and a lover of learning and teaching languages. 
                    <wbr />I speak English, French, and Spanish, and am currently studying Brazilian Portuguese.
                        <wbr />
                        I've been tutoring ESL for two years. I studied French language and literature in college, and then continued my studies in language with Spanish after graduation. 
                        <wbr />As an ESL tutor, I speak mostly Latin American Spanish with my students. 
                        <wbr />I've studied French, Spanish, and Portuguese, and I use these experiences to help my students learn English. I know what it's like to learn a new language, so I use my own experiences in my lessons!
                      
                        <wbr />Book a trial lesson with me and we can discuss your goals in learning English and where you would like to start. :)</p>
                </div>
                <div className="teacher-schedule column is-10 ">
                <strong className='is-size-5'>Lịch học</strong>
                    <hr/>
                </div>
                <div className="teacher-academic column is-10 ">
                <strong className='is-size-5'>Học vấn</strong>
                    <hr/>
                </div>
                <div className="teacher-degree column is-10 ">
                <strong className='is-size-5'>Chứng chỉ, bằng cấp </strong>
                    <hr/>
                </div>
            </div>
            <div className="more-teacher colunm is-3 is-multiline ">
               <div className='more-teacher-aside '>
               <TeacherShortInfoRight />
               </div>
                   
            </div>
        </div>
    )
}

export default DetailTeacherpage