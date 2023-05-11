
import { Link } from 'react-router-dom'
import '../../assets/styles/LandingPage.css'
import { BsCalendar2CheckFill, BsCashCoin, BsCoin, BsFillBarChartFill, BsFillFileRuledFill, BsFillJournalBookmarkFill, BsFillPersonCheckFill, BsPencilSquare } from 'react-icons/bs'
import ClassCard from '../../components/ClassCard'
import FindingClassMessage from '../../components/Message/FindingClassMessage'

const LandingPage = () => {
    return (
        <div className="landing-page_container container-fluid">
            <hero className="landing-page_hero">
                <div className="columns landing-page_hero-columns">
                    <div className="column is-8 " id='landing-page_hero-left'>

                        {/* <strong className='is-size-3'> Tận hưởng hành trình chinh phục tiếng Anh cùng những giáo viên tốt nhất
                            <br />Finding Teacher - Luôn đồng hành cùng bạn  </strong> */}
                        <strong className='is-size-3'>Những giáo viên tốt nhất luôn bên cạnh bạn<br />Khám phá hành trình tiếng Anh diệu kì ngay hôm nay!</strong>
                        <Link to="/findingTeacher">
                            <button class="button is-primary"
                            style={{
                                width: '25rem',
                            }}
                            >
                                Bắt đầu 
                            </button>
                        </Link>
                        {/* <br/> Hành trình chinh phục tiếng Anh của bạn luôn có chúng tôi  dong hanh  cung */}
                        <div className="columns is-multiline is-centered">
                            <div className="column">
                                <p>IELTS</p>
                            </div>
                            <div className="column">
                                <p>TOEIC</p>
                            </div>
                            <div className="column">
                                <p>TOELF</p>
                            </div>
                            <div className="column">
                                <p>KIDS</p>
                            </div>
                            <div className="column">
                                <p>BUSSINESS</p>
                            </div>
                        </div>
                    </div>
                    <div className="column is-4 landing-page_hero-right">
                        <img className='landing-page_img' src={require('../../assets/images/1.jpg')} alt="" />
                    </div>
                </div>

            </hero>

            <section className="landing-page_section-1 container ">
                <div className="landing-page_section-1-1 is-centered pl-3 pr-3">
                    <strong className="is-size-4">Bắt đầu hành trình của riêng bạn</strong>
                    <p className='is-size-6'>Học tiếng Anh cùng những giáo viên chất lượng trên khắp Việt Nam</p>
                    <br />
                    <div className="columns is-multiline">
                        <div className="column is-3 landing-page_section-1-1-column">
                            <BsCalendar2CheckFill className='landing-page_section-1-1-icon'/>
                            <strong>Giáo viên chất lượng</strong>
                            <p>Có chuyên môn tốt và<br /> chứng chỉ được xác minh</p>

                        </div>
                        <div className="column is-3 landing-page_section-1-1-column">
                            <BsFillPersonCheckFill className='landing-page_section-1-1-icon'/>
                            <strong>Hồ sơ trung thực</strong>
                            <p> Hồ sơ của  giáo viên<br />  được kiểm tra và xác nhận kĩ càng</p>
                        </div>
                        <div className="column is-3 landing-page_section-1-1-column">
                            <BsCoin className='landing-page_section-1-1-icon'/>
                            <strong>Giá cả hợp lí</strong>
                            <p>Những lớp học chất lượng<br /> phù hợp với tài chính cá nhân </p>
                        </div>
                        <div className="column is-3 landing-page_section-1-1-column">
                            <BsPencilSquare className='landing-page_section-1-1-icon'/>
                            <strong>Đánh giá giáo viên</strong>
                            <p>Đánh giá giáo viên<br /> trong suốt quá trình học </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="landing-page_section-1-2 is-centered ">
                    <strong className="is-size-4">Tập trung vào những kĩ năng bạn mong muốn    </strong>
                    <p className='is-size-6'>Giáo viên của chúng tôi sẽ giúp bạn đạt được mục tiêu mơ ước</p>
                    <br />
                    <div className="columns">
                        <div className="column is-6">
                            <strong>Cải thiện khả năng học tiếng Anh </strong>
                            <p>Vượt qua nỗi sợ tiếng Anh và tiến bộ từng ngày </p>
                        </div>
                        <div className="column is-6">
                            <strong>Xây dựng sự tự tin </strong>
                            <p>Rèn luyện kĩ năng và phong thái tự tin khi giao tiếp </p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-6">
                            <strong>Làm chủ ngôn ngữ </strong>
                            <p>Hoàn thiện và phát triển kĩ năng tiếng Anh của bạn </p>
                        </div>

                        <div className="column is-6">
                            <strong>Giáo viên luôn đồng hành cùng bạn </strong>
                            <p>Luôn giải đáp những thắc mắc của học viên và kết nối với phụ huynh </p>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="landing-page_section-1-3 is-centered ">

                    <strong className="is-size-4">Hàng ngàn học viên đã và đang theo học cùng chúng tôi </strong>
                    <p className='is-size-6'>... và đạt được mục tiêu của họ.<br />
                        Với những giáo viên tuyệt vời của chúng tôi, mục tiêu của bạn sẽ gần hơn bao giờ hết!</p>
                    <br />
                    <Link to='/signup'>  <button class="button is-primary">
                        Tham gia cùng chúng tôi
                    </button></Link>

                </div>
            </section>
            <br />
            <br />
            <hr />

            <section className="landing-page_section-2 container">

                <div className="columns is-centered landing-page_section-2-columns">
                    <div className="column is-6 landing-page_section-2-columns-left">
                        <div className="columns landing-page_section-2-columns-left-columns">

                            <strong className="is-size-4 landing-page_section-2-strong ">Gia nhập đội ngũ giáo viên tiếng Anh của chúng tôi</strong>
                            <p className='landing-page_section-2-p'>Trở thành giáo viên tiếng Anh ngay hôm nay</p>
                            <p className='landing-page_section-2-p'>Chia sẻ kiến thức tiếng Anh đến mọi học viên </p>
                            <br/>
                            <div className='landing-page_section-2-div'>
                                <BsFillFileRuledFill className='landing-page_section-2-icon'/>
                                <p className='landing-page_section-2-p'>Tạo lớp học</p>
                            </div>
                            <div className='landing-page_section-2-div'>
                            <BsFillBarChartFill className='landing-page_section-2-icon'/>
                                <p className='landing-page_section-2-p'>Tạo ra thu nhập</p>
                            </div>
                            <div className='landing-page_section-2-div'>
                            <BsCashCoin className='landing-page_section-2-icon'/>
                                <p className='landing-page_section-2-p'>Chi trả minh bạch</p>
                            </div>
                            <br/>
                            <Link className='landing-page_section-2-link' to='/signup'>  <button class="button is-primary">Đăng kí ngay!</button></Link>
                        </div>
                    
                    </div>
                    <div className="column is-6 landing-page_section-2-columns-right">
                        <img  className='landing-page_img' src={require('../../assets/images/12.jpg')} alt="" />
                    </div>
                </div>
            </section>
            <hr/>
            <br/>
            <section className="landing-page_section-3 container">
                <strong className="is-size-4">Finding teacher là nơi tốt nhất giúp bạn tìm kiếm giáo viên tiếng Anh</strong>
                <div className="columns is-multiline">
                <FindingClassMessage 
                title='4.9/5 '
                content='Giáo viên của chúng tôi được đánh giá 4 - 5 sao với hàng ngàn lượt đánh giá từ phụ huynh và học sinh ' 
                color='is-danger'/>
                <FindingClassMessage
                title='125 giáo viên '
                content='100% giáo viên có trình độ chuyên môn cao với ít nhất 1 chứng chỉ tiếng Anh'
                color='is-warning'
                />
                <FindingClassMessage
                title='3h'
                content='Giáo viên của chúng tôi sẽ giải đáp mọi thắc mắc của học viên và phụ huynh trong vòng 3 h '
                color='is-primary'
                />
                <FindingClassMessage
                title='90% '
                content='Là tỉ lệ học viên và phụ huynh hài lòng với giáo viên của chúng tôi '
                color='is-info'
                />
                </div>
                <br/>
            </section>
            {/* <section className="landing-page_section-4">
                <p>section-4</p>
            </section>
            <section className="landing-page_section-5">
                <p>section-5</p>
            </section> */}

        </div>
    )
}

export default LandingPage