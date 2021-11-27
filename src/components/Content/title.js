import React from 'react'

const APPS = {
  1: ['Калькулятор калорий', 'fas fa-candy-cane'],
  2: ['Индекс массы тела', 'fas fa-fire-alt'],
  3: ['Идеальный вес', 'far fa-grin-stars']
}

export default function Title(props) {
  const [name, iconClass] = APPS[props.num]

  return (
    <div className="h_name-app">
      <span>{name}</span>
      <i className={iconClass}/>
    </div>
  )
}
