import './App.css';
import { HashRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import HomeM from './myComponents/home/HomeM.jsx';
import Climate from './myComponents/home/Climate.jsx';
import Alert from './myComponents/home/Alert.jsx';
import GenderE from './myComponents/home/GenderE.jsx';
import Help from './myComponents/home/Help.jsx';
import JoinUs from './myComponents/home/JoinUs.jsx';
import Layout from './myComponents/home/Layout.jsx';
import FloodData from './FloodData.jsx';
import FloodMap from './myComponents/home/FloodMapA.jsx';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<HomeM/>}/>
            <Route path='/Climate' element={<Climate/>}/>
            <Route path='/FloodMap' element={<FloodMap />}/>
            <Route path='/Alert' element={<Alert/>}/>
            <Route path='/GenderE' element={<GenderE/>}/>
            <Route path='/Help' element={<Help/>}/>
            <Route path='/JoinUs' element={<JoinUs/>}/>
            <Route path='/FloodData' element={<FloodData/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
