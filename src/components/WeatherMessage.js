import React, { Component } from 'react'
import styles from './WeatherMessage.module.css'
import { Accordion } from 'react-bootstrap'
import WeatherDay from './WeatherDay'
export default class WeatherMessage extends Component {
  render() {

    return (
      this.props.error ? <h2>No weather data found</h2> :
        < section >
          <h2 className={this.props.weatherData ? styles.show : styles.hide}>
            { }
          </h2><ul><Accordion>
            {this.props.weatherData ?
              this.props.weatherData.map((item, index) => {
                return (
                  <WeatherDay item={item} index={index} />
                )

              }) : <></>
            }</Accordion></ul>
        </section >

    )
  }
}
