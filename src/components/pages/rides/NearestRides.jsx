import Ride from "../../elements/ride/Ride";
import userData from "../../data/userData";
import "./rides.css";
import { useState } from "react";
import {closest, nearestArray} from "./Logic";



function NearestRides() {
 
  
 
  return (
    <div className="rides">

            {nearestArray.map((oneRide, index)=>(
            <Ride
            id={oneRide.id}
            os_code={oneRide.origin_station_code}
            s_path={oneRide.station_path.toString()}
            date={new Date(oneRide.date).toDateString({})}
            map_url={oneRide.map_url}
            state={oneRide.state}
            city={oneRide.city}
            distance={Math.abs(closest(oneRide.station_path, 40)-userData.station_code)}
            // oneRide.station_path.toString()
            />
            ))}        

            {/* {
              ride_data.filter(isNearestRide)
            } */}
    </div>
  )
}

export default NearestRides