import React from "react"

class SecondCounterComponent extends React.Component {
  constructor() {
    super()
    // To do: initial count state here
  }

  handleClick = (e) => {
    // To do: update count state here
  }

  render() {
    // To do: pass count parameter as a props to ShowCountComponent
    return (
      <div>
        <ShowCountComponent/>
        <button onClick={this.handleClick}>Plus 1</button>
      </div>
    )
  }
}

const ShowCountComponent = () => {
  // To do: show counting here
  return <h1>SecondCounter Count:</h1>
}

export default SecondCounterComponent
