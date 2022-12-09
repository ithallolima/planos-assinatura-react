import './InputRadio.css'

function InputRadio(props) {
  return (
    <>
      <div className="radio-wrapper">
        <input type="radio" name={props.name} id={props.id} defaultChecked={props.checked} />
        <div>
          <label htmlFor={props.id}>{props.label}</label>
          <p>
            {props.details}
          </p>
        </div>
      </div>
    </>
  )
}

export default InputRadio