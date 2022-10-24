import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import styles from './ExploreForm.module.css'
export default class ExploreForm extends Component {
  constructor() {
    super()
    this.state = {
      city: ''
    }
  }
  submitHandle = (e) => {
    e.preventDefault()
    this.setState({ city: e.target.search.value }, () => {
      console.log(this.state.city)
    })
  }
  render() {

    return (

      <Form onSubmit={this.submitHandle} className={styles.form}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search for a city:</Form.Label>
          <Form.Control name='search' type="text" placeholder="Search" />
          <Form.Text className="text-muted">
            Enter a city to begin your journey.
          </Form.Text>
        </Form.Group>
        <Button className={styles.button} variant="primary" type="submit">
          Explore!
        </Button>
      </Form>
    )
  }
}
