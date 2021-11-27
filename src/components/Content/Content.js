import React from 'react'
import CalorieCalc from '../../page/CalorieСalc/CalorieСalc'
import BodyMassIndex from '../../page/BodyMassIndex/BodyMassIndex'
import IdealWeight from '../../page/IdealWeight/IdealWeight'
import './Content.css'

export default class Content extends React.Component {
  render() {
    return (
      <div className="h_content z-depth-3">
        <CalorieCalc/>
        <BodyMassIndex/>
        <IdealWeight/>
      </div>
    )
  }
}
