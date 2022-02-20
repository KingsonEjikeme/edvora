import './App.css';
import TopContainer from './components/elements/top-container/TopContainer';
import Homepage from './components/pages/rides/NearestRides';
import rideData from './components/data/rideData';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import FiltersNavBar from './components/elements/filtersNavBar/FiltersNavBar';
import NearestRides from './components/pages/rides/NearestRides';
import UpcomingRides from './components/pages/rides/UpcomingRides';
import PastRides from './components/pages/rides/PastRides';
import userData from './components/data/userData';
function App() {
  const ride_data = rideData;
  const user_data = userData;
  return (
    <Router>
      <TopContainer {...userData}/>
      <FiltersNavBar/>
      <Switch>
        <Route exact path="/">
          <NearestRides/>
        </Route>
        <Route path="/up">
          <UpcomingRides/>
        </Route>
        <Route path="/past-rides">
          <PastRides />
        </Route>
      </Switch>
      
      
    </Router>
  );
}

export default App;
