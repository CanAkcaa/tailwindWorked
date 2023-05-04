import {Routes,Route} from 'react-router-dom'
import Home from '../Component/Home';
import './Content.css'

function Content(){
    return <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
        <Route path="/usersList" element={<div>Users List</div>}></Route>
        <Route path="/activeUsers" element={<div>Active Users List</div>}></Route>
        <Route path="/disabledUsers" element={<div>Disabled Users List</div>}></Route>
        <Route path="/profile" element={<div>Profile</div>}></Route>
      </Routes>
    </div>
}

export default Content;