import React, { Component } from 'react'

export default class MessageBox extends Component {



  render() {
    return (
      <section>
        <h1>{this.props.cityData.city}</h1>
        <h5><span>Latitude:</span> {this.props.cityData.lat}</h5>
        <h5><span>Longitude:</span> {this.props.cityData.lon}</h5>
        <img src={this.props.cityData.icon}></img>
      </section>
    )
  }
}
