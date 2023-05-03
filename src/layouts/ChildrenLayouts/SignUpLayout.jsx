

const SignUpLayout=({img_singup_link,signup_type_form})=>{
    return(
        <div className="sing-up-layout container-fluid">
            <div className="columns">
                <div className="column">
                    <img src={img_singup_link} alt=""/>
                </div>
                <div className="column is-6 ml-6">
                    {signup_type_form}
                </div>
            </div>
        </div>
    )
}

export default SignUpLayout