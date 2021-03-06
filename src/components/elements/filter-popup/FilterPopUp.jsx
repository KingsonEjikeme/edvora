import { useState } from "react";
import PopupElement from "../popup-element/PopupElement";
import "./filterPopUp.css";
import {allCities, allStates} from "../../pages/rides/Logic";
import rideData from "../../data/rideData";
import FilterDropDown from "../filterDropDown/FilterDropDown";
function FilterPopUp(props) {
    const [stateDrop, setStateDrop] = useState(false);
    const [cityDrop, setCityDrop] = useState(false);
    const [stateList, setStateList] = useState(false);
    

    const handleStateDrop = () =>{
        setStateDrop(!stateDrop)
        if(stateDrop){
            setStateList(true)
        }else{
            setStateList(false)
        }
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
            State <i className={stateDrop?"fas fa-caret-up caret":"fas fa-caret-down caret"}></i>
            <div className="dropdown-container">
                {rideData.map(singleState=>{
                    <FilterDropDown stateName={singleState.state}/>
                })}
            </div>
        </div>

        <div className="state" onClick={handleCityDrop}>
            City  <i className={cityDrop?"fas fa-caret-up caret":"fas fa-caret-down caret"}></i>
            <div className="dropdown-container">
                
                {rideData.map(singleCity=>{ 
                     return singleCity.city
                })}
            </div>
        </div>
    </div>
  )
}

export default FilterPopUp