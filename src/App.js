import './App.css';
// import Cards from './components/Cards';
import InputForum from './components/InputForum';
import Login from './components/Login';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskManager from "./components/cardPage/TaskManager"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Cards from './components/Cards';

function App() {
  return (
    <Router>
      {/* <DndProvider backend={HTML5Backend}> */}
      <div className="App">
        {/* the routes */}

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/inputForum" element={<InputForum />} />
          <Route path="/login" element={<Login />} />
          <Route path='/cards' element={<Cards />} />
        </Routes>
        {/* not really working, it's gaving me too manay errors */}
        {/* <TaskManager /> */}
      </div>
      {/* </DndProvider> */}
    </Router>
  );
}

export default App;
