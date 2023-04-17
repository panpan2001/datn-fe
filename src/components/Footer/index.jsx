import '../../assets/styles/Footer.css';
const Footer = () => {
    return (
        <footer>
            <div className="footer-container container-fluid">
                <div className="columns column_footer ">
                    {/* <div className="column is-1 is-narrow"></div> */}
                    <div className="column " id='for-student_footer'>
                        <p>DÀNH CHO HỌC VIÊN</p>
                            <p>Tìm kiếm giáo viên</p>
                            <p>Các khóa học</p>
                            <p>Học online</p>
                            <p>Liên hệ giáo viên</p>
                       
                    </div>
                    <div className="column" id='for-teacher_footer' >
                        <p>DÀNH CHO GIÁO VIÊN </p>
                        <p>Trở thành giáo viên</p>
                        <p>Tạo khóa học</p>
                        <p>Liên hệ với học viên hoặc phụ huynh </p>
                    </div>
                    <div className="column " id='contact-us_footer'>
                        <p>DÀNH CHO GIÁO VIÊN </p>
                        <p>Trở thành giáo viên</p>
                        <p>Tạo khóa học</p>
                        <p>Liên hệ với học viên hoặc phụ huynh </p>
                    </div>
                    {/* <div className="column is-1"></div> */}

                </div>
            </div>
        </footer>

    )
}

export default Footer