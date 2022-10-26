import React, { Component } from 'react'
import styles from './WeatherMessage.module.css'

export default class WeatherMessage extends Component {
  render() {
    console.log(this.props)
    return (
      this.props.error ? <h2>No weather data found</h2> :
        < section >
          <h2 className={this.props.weatherData ? styles.show : styles.hide}>
            { }
          </h2><ul>
            {this.props.weatherData ?
              this.props.weatherData.map((item, index) => {
                return <li key={index}>{item.date} {item.description}</li>
              }) : <></>
            }</ul>
        </section >

    )
  }
}
