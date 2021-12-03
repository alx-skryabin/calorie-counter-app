import React, {useEffect} from 'react'

const APPS = {
  1: ['Главная', 'fas fa-home'],
  2: ['Калькулятор калорий', 'fas fa-candy-cane'],
  3: ['Индекс массы тела', 'fas fa-fire-alt']
}

export default function Title(props) {
  const [name, iconClass] = APPS[props.num]
  useEffect(() => {
    document.querySelector('head title').innerText = name
  }, [name])

  return (
    <div className="h_name-app">
      <span>{name}</span>
      <i className={iconClass}/>
    </div>
  )
}
