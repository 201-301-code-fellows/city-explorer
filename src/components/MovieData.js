import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
import styles from './MovieData.module.css'
export default class MovieData extends Component {
  constructor(props) {
    super(props);

    this.state = {}

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state) {

      if (this.state.city !== prevProps.displayData.city) {
        this.setState(this.props.displayData, () => {

        })
      }

    }
    if (prevProps !== this.props) {
      this.forceUpdate()
    }



  }
  render() {
    console.log(this.props)
    return (
      <Accordion>

        {this.state.movieFound ? this.state.data.map(item => {

          return (<Accordion.Item key={item.id} eventKey={item.id}>
            <Accordion.Header className={styles.text}>{item.title}</Accordion.Header>
            <Accordion.Body>
              <ul >
                <li className={styles.text}>
                  Overview: {item.overview}
                </li>
                <li className={styles.text}>
                  Popularity: {item.popularity}
                </li>
                <li className={styles.text}>
                  Released: {item.released}
                </li>
                <li className={styles.text}>
                  Votes: {item.votes}
                </li>
                <li className={styles.text}>
                  Vote Average: {item.voteAvg}
                </li >
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          )




        }) : ''}
      </Accordion>
    )
  }
}
