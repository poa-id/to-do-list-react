import './css/main.css';
import TaskListContextProvider from './Contexts/AppContext';
import Input from './Components/Input';
import List from './Components/List';


const App = () => {
  return (
    <TaskListContextProvider >
      <div className="container">
        <div className="app-wrapper">
          <h1 className='main-title'>What's the plan?</h1>
          <Input />
          <List />
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
