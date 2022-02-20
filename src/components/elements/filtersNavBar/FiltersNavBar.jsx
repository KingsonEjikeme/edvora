import { Link } from "react-router-dom";
import NearestRides from "../../pages/rides/NearestRides";
import PastRides from "../../pages/rides/PastRides";
import UpcomingRides from "../../pages/rides/UpcomingRides";
import "./filtersNavBar.css";
import {pastRidesArray, upComingArray} from "../../pages/rides/Logic";

function FiltersNavBar() {
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
            <div className="filters-right">
                <div className="filters-item right"><i class="fas fa-filter"></i> Filter</div>
            </div>
        </div>
    </div>
  )
}

export default FiltersNavBar