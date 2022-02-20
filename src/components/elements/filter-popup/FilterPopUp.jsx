import { useState } from "react";
// import PopupElement from "../popup-element/PopupElement";
import "./filterPopUp.css";
function FilterPopUp(props) {
    const [stateDrop, setStateDrop] = useState(false);
    const [cityDrop, setCityDrop] = useState(false);
    const handleStateDrop = () =>{
        setStateDrop(!stateDrop)
    }
    const handleCityDrop = () =>{
        setCityDrop(!cityDrop)
    }
  return (
    <div className="filter-popup" style={props.filterState?{display:"block"}:{display:"none"}}>
        <div className="title">
            Filters
        </div>
        <hr />
        <div className="state" onClick={handleStateDrop}>
            State <i class={stateDrop?"fas fa-caret-up caret":"fas fa-caret-down caret"}></i>
        </div>
        <div className="state" onClick={handleCityDrop}>
            City  <i class={cityDrop?"fas fa-caret-up caret":"fas fa-caret-down caret"}></i>
        </div>
        {/* <PopupElement/> */}
    </div>
  )
}

export default FilterPopUp