import React from 'react'
import Title from '../../components/Content/title'
import './BodyMassIndex.css'

const initialState = {
  height: 178,
  weight: 68
}

const indexs = [
  [[0, 16], 'Выраженный дефицит массы тела', 'red lighten-1', 'less'],
  [[16, 18.5], 'Недостаточная (дефицит) масса тела', 'orange lighten-1'],
  [[18.5, 25], 'Нормальная масса тела', 'green accent-3'],
  [[25, 30], 'Избыточная масса тела (предожирение)', 'yellow darken-1'],
  [[30, 35], 'Ожирение первой степени', 'orange lighten-1'],
  [[35, 40], 'Ожирение второй степени', 'yellow darken-4'],
  [[40, 99999], 'Ожирение третьей степени (морбидное)', 'red lighten-1', 'more']
]

export default class BodyMassIndex extends React.Component {
  state = {...initialState}
  doChange = false

  onChangeRange(e) {
    const newState = this.state
    const range = e.target.dataset.range
    newState[range] = e.target.value
    this.setState(newState)
  }

  calc() {
    const {height, weight} = this.state
    const IMT = Number((weight / ((height / 100) ** 2))
      .toFixed(2))
    return defineResult(IMT)
  }

  // декоратор debounce
  debounceOnChange(e) {
    if (this.doChange) return
    this.onChangeRange(e)
    this.doChange = true
    setTimeout(() => this.doChange = false, 100)
  }

  render() {
    const {IMT, range, text, color} = this.calc()

    return (
      <div className="h_app">
        <Title num="3"/>
        <div className="h_params-wrap">
          <div className="h_params-item">
            <input
              onChange={this.onChangeRange.bind(this)}
              data-range="height" defaultValue={this.state.height}
              type="range" min="30" max="250" name="height"
            />
            <div>
              <strong>Рост:</strong>
              <span className="h_params-desc-value">{this.state.height}</span>
              <span>см</span>
            </div>
          </div>
          <div className="h_params-item">
            <input
              onChange={this.debounceOnChange.bind(this)}
              data-range="weight" defaultValue={this.state.weight}
              type="range" min="1" max="200" name="weight"
            />
            <div>
              <strong>Вес:</strong>
              <span className="h_params-desc-value">{this.state.weight}</span>
              <span>кг</span>
            </div>
          </div>
        </div>
        <div className="h_result-index-wrap teal accent-1">
          <div className="h_subtitle center-align">Ваш индекс</div>
          <div className="h_result-index-value center-align">
            <strong>
              <span className={`h_index-color ${color}`}/>
              {IMT}
            </strong>
            <div>{text}</div>
            <div>{range}</div>
          </div>
        </div>
      </div>
    )
  }
}

function defineResult(IMT) {
  const item = indexs.filter(item => {
    const [[a, b]] = item
    return a < IMT && b > IMT
  })

  const [[a, b], text, color, mod = false] = item[0]

  let range

  switch (mod) {
    case 'less':
      range = `Меньше ${b}`
      break
    case 'more':
      range = `Больше ${a}`
      break
    default:
      range = `от ${a} до ${b}`
  }

  return {
    text, range, IMT, color
  }
}
