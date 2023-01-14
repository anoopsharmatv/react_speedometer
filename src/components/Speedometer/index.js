import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    this.setState(prevState => {
      if (prevState.count === 200) {
        return {count: 200}
      }
      return {count: prevState.count + 10}
    })
  }

  brake = () => {
    this.setState(prevState => {
      if (prevState.count === 0) {
        return {count: 0}
      }
      return {count: prevState.count - 10}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="speedometer">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
        />
        <h1 className="speed">
          Speed is <span className="speed-value"> {count}</span>
          mph
        </h1>
        <p className="limits">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button">
          <button
            className="accelerate"
            type="button"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button className="brake" type="button" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
