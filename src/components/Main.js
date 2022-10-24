import React, { Component } from 'react'
import Map from './Map'
import MessageBox from './MessageBox'
import ExploreForm from './ExploreForm'
import { Card } from 'react-bootstrap'
import styles from './Main.module.css'
export default class Main extends Component {
  render() {



    return (

      <main className={styles.wrapper}>
        <section>
          <Card className={styles.card}>
          <h1>City Explorer</h1>
            <ExploreForm />
          </Card>
        </section>
        <section>
          <Card className={styles.card}>
            <MessageBox />
          </Card>
          <Card className={styles.card}>
            <Map />
          </Card>
        </section>
      </main>

    )
  }
}
