import React, {Suspense} from 'react'
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom'
import Nav from '../Nav/Nav'
import Loader from '../Loader/Loader'
import './Content.css'

//lazy load page
const BodyMassIndex = React.lazy(() => import('../../page/BodyMassIndex/BodyMassIndex'))
const CalorieCalc = React.lazy(() => import('../../page/CalorieСalc/CalorieСalc'))
const Home = React.lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve(import('../../page/home/Home'))
  }, 1500)
}))

export default class Content extends React.Component {
  render() {
    return (
      <Router>
        <Nav/>
        <div className="h_content z-depth-3">
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route exact path="/imt" element={<BodyMassIndex/>}/>
              <Route exact path="/calorie" element={<CalorieCalc/>}/>
              <Route exact path="*" element={<Home/>}/>
            </Routes>
          </Suspense>
        </div>
      </Router>
    )
  }
}
