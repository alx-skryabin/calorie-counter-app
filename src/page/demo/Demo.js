import React from 'react'

export default class Demo extends React.Component {
  execPositiveNumberOperation(...args) {
    return args
      .filter(item => +item && +item > 0)
      .map(item => +item)
      .reduce((acc, item, i) => {
        return (i === 0) ? item : eval(`${acc} ${args[0]} ${item}`)
      }, null)
  }

  render() {
    return (
      <div className="h_app">
        <div className="h_wrap-apps">
          {this.execPositiveNumberOperation('+', '1', '2', 'a', 'b', '-1', '6')}<br/>
          {this.execPositiveNumberOperation('-', '1', '2', 'a', 'b', '-1', '6')}<br/>
          {this.execPositiveNumberOperation('*', '1', '2', 'a', 'b', '-1', '6')}<br/>
          {this.execPositiveNumberOperation('/', '1', '2', 'a', 'b', '-1', '6')}<br/>
        </div>
      </div>
    )
  }
}
