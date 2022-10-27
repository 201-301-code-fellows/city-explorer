import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
import styles from './WeatherMessage.module.css'
export default class WeatherDay extends Component {
  render() {
    return (
      <Accordion.Item key={this.props.index} eventKey={this.props.index}>
        <Accordion.Header className={[styles.text, styles.header].join(' ')}>{this.props.item.date}</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li className={styles.text}>{this.props.item.description}</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    )
  }
}
