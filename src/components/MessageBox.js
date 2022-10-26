import React, { Component } from 'react'
import styles from './MessageBox.module.css'
import axios from 'axios'
import WeatherMessage from './WeatherMessage'
const weatherChecker = async (city, lat, lon) => {

  try {
    const weatherData = await axios.get(`http://localhost:3001/?city_name=${city}&lat=${lat}&lon=${lon}`)
    return weatherData;
  }

  catch (error) {
    const weatherError = error.message
    return weatherError
  }

}
export default class MessageBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherData: '',
      cityName: this.props.cityData.city
    }
  }


  componentDidUpdate(prevProps, prevState) {

    if (this.props.cityData.lon && prevProps.cityData.lon !== this.props.cityData.lon) {

      const weatherData = weatherChecker(this.props.cityData.city, this.props.cityData.lat, this.props.cityData.lon)
      weatherData.then((data) => {

        if (data.data) {
          this.setState(() => ({ weatherData: data.data, cityName: this.props.cityData.city }), () => {

          })
        }
      }).catch(error => console.log(error))

    }
  }


  render() {

    return (
      <div>
        <section>
          <h1>{this.props.cityData.city}</h1>
          <h5><span className={this.props.cityData.lat ? styles.span : styles.none}>Latitude: {this.props.cityData.lat}</span></h5>

          <h5><span className={this.props.cityData.lat ? styles.span : styles.none}>Longitude: {this.props.cityData.lon}</span></h5>

          <h5 className={this.props.cityData.error ? styles.span : styles.none}>{this.props.cityData.error}</h5>
        </section>
        <section>
          <WeatherMessage weatherData={this.state.weatherData} />
        </section>
      </div>
    )
  }
}
