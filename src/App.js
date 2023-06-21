import './App.css';
import MyTitle from './Components/MyTitle';
import MyTutorialVideo from './Components/MyTutorialVideo';
import MyTimer from './Components/MyTimer';
import MyWorkout from './Components/MyWorkout';
import MyMusic from './Components/MyMusic';

function App() {
  return (
    <div className="App">
      <MyTitle />
      <MyTutorialVideo />
      <MyTimer />
      <MyWorkout />
      <MyMusic />
    </div>
  );
}

export default App;
