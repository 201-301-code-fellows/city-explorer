import React, { Component } from 'react'

export default class Map extends Component {
  render() {
    return (
      <img alt='map of a city' src={this.props.mapUrl}></img>
    )
  }
}
