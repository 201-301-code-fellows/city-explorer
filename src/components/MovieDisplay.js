import axios from 'axios'
import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import styles from './MovieDisplay.module.css'
import MovieData from './MovieData'
export default class MovieDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieFound: this.props.cityFound,
      render: 'show',
      city: this.props.queryData
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.queryData, prevProps.queryData, this.props?.cityFound)
    if (this.props?.cityFound && this.state.city !== this.props.queryData) {
      axios.get(`http://localhost:3001/movies?city_name=${this.props.queryData}`).then(data => {
        return this.setState({ city: this.props.queryData, movieFound: true, render: 'show', data: data.data })
      })
        .catch(error => console.log(error))
    }
  }

  render() {
    return (
      <div className={styles[this.state.render]}>
        <Card className={styles.card}>
          <h2>Movie Data</h2>
          <MovieData displayData={this.state} />
        </Card>
      </div>
    )
  }
}
