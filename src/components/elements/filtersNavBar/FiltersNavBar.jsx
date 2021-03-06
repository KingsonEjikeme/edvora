import { Link } from "react-router-dom";
import "./filtersNavBar.css";
import {pastRidesArray, upComingArray} from "../../pages/rides/Logic";
import { useLocation } from "react-router-dom";

function FiltersNavBar(props) {
  const currentLocation = useLocation().pathname;
  console.log(currentLocation);
  const handleFilter =()=>{
    console.log("I work!!");
    props.setFilterState(!props.filterState)
  }
  
  const linkStyle ={
    textDecoration:"none",
    color:"#fff"
  }
  const activeLinkStyle = {
    textDecorationLine:"underline",
    color:"#fff",
    textUnderlineOffset: "6px",
    textDecorationThickness: "2px"
  }
  const handleLinkStyle =(a)=>{
    if (currentLocation===a){
      return activeLinkStyle
    }else{
      return linkStyle
    }
  }
  return (
    <div className="filters-navbar">
        <div className="filters-container">
            <div className="filters-left">
              <Link to='/' className="filter-link" style={handleLinkStyle('/')} >
                <div className="filters-item">
                  Nearest rides
                </div>
              </Link>
              <Link to='/up' className="filter-link" style={handleLinkStyle('/up')}>
                <div className="filters-item" >
                  Upcoming rides ({upComingArray.length})
                </div>
              </Link>
              <Link to='/past-rides' className="filter-link" style={handleLinkStyle('/past-rides')}>
                <div className="filters-item">
                  Past rides ({pastRidesArray.length})
                </div>
              </Link>
            </div>
            <div className="filters-right" onClick={handleFilter}>
                <div className="filters-item right" ><i class="fas fa-filter"></i> Filter</div>
            </div>
        </div>
    </div>
  )
}

export default FiltersNavBar