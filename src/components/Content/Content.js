import React from 'react'
import Title from './title'
import CalorieCalc from '../CalorieСalc/CalorieСalc'
import './Content.css'

export default class Content extends React.Component {
  render() {
    return (
      <div className="h_content z-depth-3">
        <Title/>
        <CalorieCalc/>
      </div>
    )
  }
}
