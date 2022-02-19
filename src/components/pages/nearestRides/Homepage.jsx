import Ride from "../../elements/ride/Ride";
import rideData from "../../data/rideData";
import "./homepage.css";

function Homepage() {
  const ride_data = rideData;
  console.log(ride_data);
  console.log(rideData[0].station_path);
  const oneRid = rideData[0];

  return (
    <div className="homepage">
            {ride_data.map((oneRide, index)=>(
            <Ride
            id={oneRide.id}
            os_code={oneRide.origin_station_code}
            s_path={oneRide.station_path.toString()}
            date={new Date(oneRide.date).toDateString({})}
            map_url={oneRide.map_url}
            state={oneRide.state}
            city={oneRide.city}
            />
            ))}        
    </div>
  )
}

export default Homepage