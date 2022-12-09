import "./InputCheckbox.css"

function InputCheckbox(props) {
  return (
    <>
      <div className="checkbox-wrapper">
        <input type="checkbox" name={props.id} id={props.id} />
        <label htmlFor={props.id}>{props.label}</label>
      </div>
    </>
  )
}

export default InputCheckbox