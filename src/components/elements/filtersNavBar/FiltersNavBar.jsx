import { Link } from "react-router-dom";
import "./filtersNavBar.css";
import {pastRidesArray, upComingArray} from "../../pages/rides/Logic";

function FiltersNavBar(props) {
  const handleFilter =()=>{
    console.log("I work!!");
    props.setFilterState(!props.filterState)
  }
  return (
    <div className="filters-navbar">
        <div className="filters-container">
            <div className="filters-left">
              <Link to='/' className="filter-link" style={{textDecoration:"none",color:"#fff"}}>
                <div className="filters-item">
                  Nearest rides
                </div>
              </Link>
              <Link to='/up' className="filter-link" style={{textDecoration:"none",color:"#fff"}}>
                <div className="filters-item" >
                  Upcoming rides ({upComingArray.length})
                </div>
              </Link>
              <Link to='/past-rides' className="filter-link" style={{textDecoration:"none",color:"#fff"}}>
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