import '../../assets/styles/Footer.css';
import { CiFacebook, CiLinkedin, CiTwitter, CiYoutube } from 'react-icons/ci'
const Footer = () => {
    return (
        <footer>
            <div className="footer-container container-fluid">
                <div className="columns column_footer ">
                    {/* <div className="column is-1 is-narrow"></div> */}
                    <div className="column " id='for-student_footer'>
                        <h5>DÀNH CHO HỌC VIÊN</h5>
                        <p>Tìm kiếm giáo viên</p>
                        <p>Các khóa học</p>
                        <p>Học online</p>
                        <p>Liên hệ giáo viên</p>

                    </div>
                    <div className="column" id='for-teacher_footer' >
                        <h5>DÀNH CHO GIÁO VIÊN </h5>
                        <p>Trở thành giáo viên</p>
                        <p>Tạo khóa học</p>
                        <p>Liên hệ với học viên hoặc phụ huynh</p>
                    </div>
                    <div className="column " id='contact-us_footer'>
                        <h5>LIÊN HỆ VỚI CHÚNG TÔI </h5>
                        <p>Phường Hòa Khánh Bắc, Quận Liên Chiểu,</p>
                        <p>TP Đà Nẵng, Việt Nam</p>
                        <br />
                        <div className="icon-social-media">
                            <CiFacebook />
                            <CiYoutube />
                            <CiLinkedin />
                            <CiTwitter />
                        </div>

                    </div>

                </div>
            </div>
        </footer>

    )
}

export default Footer