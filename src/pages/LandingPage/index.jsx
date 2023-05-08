import { ToastContainer } from 'react-toastify'
import '../../assets/styles/LandingPage.css'

const LandingPage = () => {
    return (
        <div className="landing-page_container container-fluid">
            <hero className="landing-page_hero">
<div className="columns landing-page_hero-columns">
    <div className="column is-8 landing-page_hero-left">
    
<p> Tận hưởng hành trình chinh phục tiếng Anh cùng những giáo viên tốt nhất
<br/>Finding Teacher - Luôn đồng hành cùng bạn  </p>
<button class="button is-primary">Primary</button>
{/* <br/> Hành trình chinh phục tiếng Anh của bạn luôn có chúng tôi  */}
    </div>
    <div className="column is-4 landing-page_hero-right">
    <img src={require('../../assets/images/1.jpg')} alt=""/>
    </div>
</div>
            </hero>
           <section className="landing-page_section-1">
            <p>section-1</p>
           </section>
           <section className="landing-page_section-2">
            <p>section-2</p>
           </section>
           <section className="landing-page_section-3">
            <p>section-3</p>
           </section>
           <section className="landing-page_section-4">
            <p>section-4</p>
           </section>
           <section className="landing-page_section-5">
            <p>section-5</p>
           </section>
           {/* <ToastContainer/> */}

        </div>
    )
}

export default LandingPage