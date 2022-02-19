import './App.css';
import TopContainer from './components/elements/top-container/TopContainer';
import Homepage from './components/pages/nearestRides/Homepage';
import rideData from './components/data/rideData';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import FiltersNavBar from './components/elements/filtersNavBar/FiltersNavBar';
function App() {
  const ride_data = rideData;
  return (
    <Router>
      <TopContainer/>
      <FiltersNavBar/>
      <Switch>
        <Route path="/nearest-rides">
          <NearestRides/>
        </Route>
        <Route path="/upcoming-rides">
          <UpcomingRides/>
        </Route>
        <Route path="/past-rides">
          <PastRides/>
        </Route>
      </Switch>
      <Homepage/>
      
    </Router>
  );
}

export default App;
