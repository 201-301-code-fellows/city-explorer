import React, { Component } from 'react'
import styles from './WeatherMessage.module.css'
import { Accordion } from 'react-bootstrap'
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
                return (<Accordion.Item key={index} eventKey={index}>
                  <Accordion.Header>{item.date}</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>{item.description}</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                )

              }) : <></>
            }</Accordion></ul>
        </section >

    )
  }
}
