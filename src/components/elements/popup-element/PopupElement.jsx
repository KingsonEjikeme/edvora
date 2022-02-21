import "./popupElement.css";

function PopupElement(props) {
  return (
    <div className="popupElement" onClick={props.handleDrop}>
        {props.dropDownName} <i class={props.dropState?"fas fa-caret-up caret":"fas fa-caret-down caret"}></i>
    </div>
  )
}

export default PopupElement