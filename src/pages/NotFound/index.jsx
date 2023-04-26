import '../../assets/styles/NotFound.css'
const NotFound = () => {
    return(
    <div className='not-found-page_container container-fluid'>
    <img src={require('../../assets/images/not-found-3.jpg')} alt='404'/>
    <p><strong>Không tìm thấy rồi bạn ơi...</strong></p>
    </div>
    )
}

export default NotFound