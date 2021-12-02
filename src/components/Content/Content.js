import React from 'react'
import Nav from '../Nav/Nav'
import Home from '../../page/home/Home'
import CalorieCalc from '../../page/CalorieСalc/CalorieСalc'
import BodyMassIndex from '../../page/BodyMassIndex/BodyMassIndex'
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom'
import './Content.css'

export default class Content extends React.Component {
  render() {
    return (
      <Router>
        <Nav/>
        <div className="h_content z-depth-3">
          <Routes>
            <Route exact path="/calorie" element={<CalorieCalc/>}/>
            <Route exact path="/imt" element={<BodyMassIndex/>}/>
            <Route exact path="*" element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    )
  }
}
