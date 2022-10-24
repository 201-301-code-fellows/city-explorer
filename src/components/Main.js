import React, { Component } from 'react'
import Map from './Map'
import MessageBox from './MessageBox'
import ExploreForm from './ExploreForm'
import { Card } from 'react-bootstrap'
export default class Main extends Component {
  render() {
    return (

      <main>
        <section>
          <Card>
            <ExploreForm />
          </Card>
        </section>
        <section>
          <Card>
            <MessageBox />
          </Card>
          <Card>
            <Map />
          </Card>
        </section>
      </main>

    )
  }
}
