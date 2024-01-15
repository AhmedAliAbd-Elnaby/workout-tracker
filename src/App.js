import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navigation from './header/Navigation';
import {Home} from './home/Home'

import Workouts from './workouts/Workouts';
import MyWorkouts from './myWorkouts/MyWorkouts';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <Workouts/>
      <MyWorkouts/>
    </div>
  );
}

export default App;
