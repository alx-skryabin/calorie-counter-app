import React from 'react'
import './CalorieСalc.css'

export default class CalorieCalc extends React.Component {
  constructor() {
    super(false);
    this.$form = document.querySelector('#formCalorie')
  }

  state = {
    age: 26,
    height: 178,
    weight: 68
  }

  componentDidMount() {
    // const $form = document.querySelector('#formCalorie')
    // $form.elements.age.value = 15
    console.log(this.$form);
  }

  onChange(e) {
    const newState = this.state
    const range = e.target.dataset.range
    newState[range] = e.target.value
    this.setState(newState)
  }

  render() {
    return (
      <div className="h_app">
        <form id="formCalorie">
          <section>
            <div className="gender-switch">
              <div className="switch ">
                <label>
                  Мужчина
                  <input type="checkbox"/>
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
                  onChange={this.onChange.bind(this)}
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
                  onChange={this.onChange.bind(this)}
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
                  onChange={this.onChange.bind(this)}
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
              <input className="with-gap" name="activity" type="radio"/>
              <span>Минимальная</span>
              <div className="helper-text">Сидячая работа и нет физических нагрузок</div>
            </label>
            <label className="h_activity-item">
              <input className="with-gap" name="activity" type="radio"/>
              <span>Низкая</span>
              <div className="helper-text">Редкие, нерегулярные тренировки, активность в быту</div>
            </label>
            <label className="h_activity-item">
              <input className="with-gap" name="activity" type="radio"/>
              <span>Средняя</span>
              <div className="helper-text">Тренировки 3-5 раз в неделю</div>
            </label>
            <label className="h_activity-item">
              <input className="with-gap" name="activity" type="radio"/>
              <span>Высокая</span>
              <div className="helper-text">Тренировки 6-7 раз в неделю</div>
            </label>
            <label className="h_activity-item">
              <input className="with-gap" name="activity" type="radio"/>
              <span>Очень высокая</span>
              <div className="helper-text">Больше 6 тренировок в неделю и физическая работа</div>
            </label>
          </section>
          <section className="section-control">
            <div className="waves-effect waves-light btn">Рассчитать</div>
            <div className="waves-effect waves-light red lighten-3 btn">✕ Очистить</div>
          </section>
        </form>
        <div className="h_result-calorie-wrap teal accent-1">
          <div className="h_subtitle center-align">Ваша норма калорий</div>
          <div className="h_result-calorie">
            <div className="h_result-calorie-item">
              <strong>400 ккал</strong>
              <span><i className="fas fa-sort-down"/> Снижение веса</span>
            </div>
            <div className="h_result-calorie-item">
              <strong>500 ккал</strong>
              <span><i className="fas fa-sort"/> Поддержание веса</span>
            </div>
            <div className="h_result-calorie-item">
              <strong>600 ккал</strong>
              <span><i className="fas fa-sort-up"/> Набор веса</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
