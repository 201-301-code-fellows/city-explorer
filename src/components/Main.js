import React, { Component } from 'react'
import Map from './Map'
import MessageBox from './MessageBox'
import ExploreForm from './ExploreForm'
import { Card } from 'react-bootstrap'
import styles from './Main.module.css'
import axios from 'axios'

const findNewCity = async (city) => {
  try {
    const data = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_GEO_KEY}&q=${city}&format=json`)
    return data;
  }
  catch (error) {
    console.log(error.message + " inside catch")
  }
}
export default class Main extends Component {
  constructor() {
    super()
    this.state = {}
  }

  getDataForSearch = (formValue) => {
    this.setState({ city: formValue })
  }

  componentDidUpdate() {
    if (this.state.city) {
      const data = findNewCity(this.state.city)

      data.then((data) => {
        if (data) {
          console.log(data.data)
          return this.setState({
            city: this.state.city,
            lon: data.data[0].lon,
            lat: data.data[0].lat,
            icon: data.data[0].icon
          })
        }
      })
    }
  }



  render() {



    return (

      <main className={styles.wrapper}>
        <section>
          <Card className={styles.card}>
            <h1>City Explorer</h1>
            <ExploreForm onGetDataForSearch={this.getDataForSearch} />
          </Card>
        </section>
        <section>
          <Card className={styles.card}>
            <MessageBox mapUrl={`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_GEO_KEY}&q=${this.state.city}&format=json`} cityData={this.state} />
          </Card>
          <Card className={styles.card}>
            <Map />
          </Card>
        </section>
      </main>

    )
  }
}
