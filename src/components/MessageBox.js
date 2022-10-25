import React, { Component } from 'react'
import styles from './MessageBox.module.css'
export default class MessageBox extends Component {



  render() {
    return (
      <section>
        <h1>{this.props.cityData.city}</h1>
        <h5><span>Latitude: {this.props.cityData.lat}</span></h5>
        <h5><span>Longitude: {this.props.cityData.lon}</span></h5>

      </section>
    )
  }
}
