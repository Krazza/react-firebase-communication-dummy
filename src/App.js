import './App.css';
import { GetUserData } from './firebase-config';

function App() {
  GetUserData();
  return (
    <div className="App"></div>
  );
}

export default App;
