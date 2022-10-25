import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import styles from './Map.module.css'
export default class Map extends Component {
  render() {
    return (
      <Card className={styles['card-map']}>
        <img alt='map of a city' src={this.props.mapUrl}></img>
      </Card>
    )
  }
}
