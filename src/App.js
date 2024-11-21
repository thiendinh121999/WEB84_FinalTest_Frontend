import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import DefaultPage from './pages/default/default';

function App() {
  return (
    <div className="App">
      <DefaultPage/>
    </div>
  );
}

export default App;
