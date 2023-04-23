import '../../assets/styles/GenderRadioButton.css'
const GenderRadioButton = ({name,label_name}) => {
    return(
        <div className="field gender-signup_form">
        <label className="label">{name}</label>
        <div class="control">
            <div id="gender-1">
            <input type="radio" name="rsvp" />
            <label class="radio " >Nam</label>

            </div>
            <div id="gender-2">
            <input type="radio" name="rsvp" />
            <label class="radio ">Nữ</label>
            </div>
            <div id="gender-3">
            <input type="radio" name="rsvp" />
            <label class="radio ">Khác</label>
            </div>
        </div>
    </div>
    )
}

export default GenderRadioButton