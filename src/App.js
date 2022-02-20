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
import FilterPopUp from './components/elements/filter-popup/FilterPopUp';
import { useState } from 'react';
function App() {
  const ride_data = rideData;
  const user_data = userData;
  const [filterState, setFilterState] = useState(true);
  return (
    <Router>
      <TopContainer
        name={userData.name}
        image="https://picsum.photos/200"
      />
      <FiltersNavBar filterState={filterState} setFilterState={setFilterState} />
      <FilterPopUp filterState={filterState}/>
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
