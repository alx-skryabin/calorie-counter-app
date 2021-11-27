import React from 'react'
import Title from '../../components/Content/title'
import './CalorieСalc.css'

const initialState = {
  age: 26,
  height: 178,
  weight: 68,
  activity: 1,
  gender: 'man'
}

export default class CalorieCalc extends React.Component {
  state = {...initialState}

  onChangeGender(e) {
    const newState = this.state
    newState.gender = e.target.checked ? 'woman' : 'man'
    this.setState(newState)
  }

  onChangeRange(e) {
    const newState = this.state
    const range = e.target.dataset.range
    newState[range] = e.target.value
    this.setState(newState)
  }

  onChangeActivity(e) {
    const newState = this.state
    newState.activity = Number(e.target.value)
    this.setState(newState)
  }

  resetForm() {
    this.setState(initialState)
  }

  render() {
    const {n, l, m} = calc(this.state)

    return (
      <div className="h_app">
        <Title num="1"/>
        <form id="formCalorie">
          <section>
            <div className="gender-switch">
              <div className="switch ">
                <label>
                  Мужчина
                  <input
                    type="checkbox"
                    onChange={this.onChangeGender.bind(this)}
                    checked={this.state.gender === 'woman' ? 'checked' : ''}
                  />
                  <span className="lever"/>
                  Женщина
                </label>
              </div>
            </div>
          </section>
          <section>
            <div className="h_params-body">
              <div className="h_params-body-item">
                <input
                  onChange={this.onChangeRange.bind(this)}
                  data-range="age" value={this.state.age}
                  type="range" min="1" max="100" name="age"
                />
                <div className="h_params-desc">
                  <strong>Возраст:</strong>
                  <span className="h_params-desc-value">{this.state.age}</span>
                  <span>лет</span>
                </div>
              </div>
              <div className="h_params-body-item">
                <input
                  onChange={this.onChangeRange.bind(this)}
                  data-range="height" value={this.state.height}
                  type="range" min="30" max="250" name="height"
                />
                <div className="h_params-desc">
                  <strong>Рост:</strong>
                  <span className="h_params-desc-value">{this.state.height}</span>
                  <span>см</span>
                </div>
              </div>
              <div className="h_params-body-item">
                <input
                  onChange={this.onChangeRange.bind(this)}
                  data-range="weight" value={this.state.weight}
                  type="range" min="1" max="200" name="weight"
                />
                <div className="h_params-desc">
                  <strong>Вес:</strong>
                  <span className="h_params-desc-value">{this.state.weight}</span>
                  <span>кг</span>
                </div>
              </div>
            </div>
          </section>
          <section className="section-activity">
            <div className="h_subtitle">Активность</div>
            <label className="h_activity-item">
              <input
                className="with-gap" name="activity" type="radio" value="1"
                onChange={this.onChangeActivity.bind(this)}
                checked={this.state.activity === 1 ? 'checked' : ''}
              />
              <span>Минимальная</span>
              <div className="helper-text">Сидячая работа и нет физических нагрузок</div>
            </label>
            <label className="h_activity-item">
              <input
                className="with-gap" name="activity" type="radio" value="2"
                onChange={this.onChangeActivity.bind(this)}
              />
              <span>Низкая</span>
              <div className="helper-text">Редкие, нерегулярные тренировки, активность в быту</div>
            </label>
            <label className="h_activity-item">
              <input
                className="with-gap" name="activity" type="radio" value="3"
                onChange={this.onChangeActivity.bind(this)}
              />
              <span>Средняя</span>
              <div className="helper-text">Тренировки 3-5 раз в неделю</div>
            </label>
            <label className="h_activity-item">
              <input
                className="with-gap" name="activity" type="radio" value="4"
                onChange={this.onChangeActivity.bind(this)}
              />
              <span>Высокая</span>
              <div className="helper-text">Тренировки 6-7 раз в неделю</div>
            </label>
            <label className="h_activity-item">
              <input
                className="with-gap" name="activity" type="radio" value="5"
                onChange={this.onChangeActivity.bind(this)}
              />
              <span>Очень высокая</span>
              <div className="helper-text">Больше 6 тренировок в неделю и физическая работа</div>
            </label>
          </section>
          <section>
            <div
              className="waves-effect waves-light red lighten-3 btn"
              onClick={this.resetForm.bind(this)}
            >
              ✕ Очистить
            </div>
          </section>
        </form>
        <div className="h_result-calorie-wrap teal accent-1">
          <div className="h_subtitle center-align">Ваша норма калорий</div>
          <div className="h_result-calorie">
            <div className="h_result-calorie-item">
              <strong>{l} ккал</strong>
              <span><i className="fas fa-sort-down"/> Снижение веса</span>
            </div>
            <div className="h_result-calorie-item">
              <strong>{n} ккал</strong>
              <span><i className="fas fa-sort"/> Поддержание веса</span>
            </div>
            <div className="h_result-calorie-item">
              <strong>{m} ккал</strong>
              <span><i className="fas fa-sort-up"/> Набор веса</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function defineActivity(activity) {
  let k
  switch (activity) {
    case 1:
      k = 1.2
      break
    case 2:
      k = 1.375
      break
    case 3:
      k = 1.55
      break
    case 4:
      k = 1.725
      break
    case 5:
      k = 1.9
      break
    default:
      k = 1.2
      break
  }
  return k
}

function calc(state) {
  const coefficients = {
    man: [88.36, 13.4, 4.8, 5.7],
    woman: [447.6, 9.2, 3.1, 4.3]
  }
  const {gender, weight, height, age, activity} = state
  const [g, w, h, a] = coefficients[gender]

  const N = (g + (w * weight) + (h * height) - (a * age)) * defineActivity(activity)
  return {
    n: Math.round(N),
    l: Math.round(N * 0.85),
    m: Math.round(N * 1.15)
  }
}
