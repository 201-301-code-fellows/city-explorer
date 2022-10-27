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
  }
  render() {
    console.log(this.props)
    return (
      <Accordion>

        {this.state.movieFound ? this.state.data.map(item => {

          return (<Accordion.Item key={item.id} eventKey={item.id}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>
              <ul className={styles.text}>
                <li>
                  {item.overview}
                </li>
                <li>
                  {item.popularity}
                </li>
                <li>
                  {item.released}
                </li>
                <li>
                  {item.votes}
                </li>
                <li>
                  {item.voteAvg}
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          )




        }) : ''}
      </Accordion>
    )
  }
}
