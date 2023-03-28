import './App.css';
// import Cards from './components/Cards';
import InputForum from './components/InputForum';
import Login from './components/Login';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskManager from "./components/cardPage/TaskManager"

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <InputForum />
        <Login />
        {/* not really working, it's gaving me too manay errors */}
        {/* <TaskManager /> */}
      </div>
    </DndProvider>
  );
}

export default App;
