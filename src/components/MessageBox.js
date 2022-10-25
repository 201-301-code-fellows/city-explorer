import React, { Component } from 'react'
import styles from './MessageBox.module.css'
export default class MessageBox extends Component {



  render() {
  
    return (
      
      <section>
        <h1>{this.props.cityData.city}</h1>
        <h5><span className={this.props.cityData.lat ? styles.span : styles.none}>Latitude: {this.props.cityData.lat}</span></h5>
        
        <h5><span className={this.props.cityData.lat ? styles.span : styles.none}>Longitude: {this.props.cityData.lon}</span></h5>

        <h5 className={this.props.cityData.error ? styles.span : styles.none}>{this.props.cityData.error}</h5>
      </section>
    )
  }
}
