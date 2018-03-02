import React, { Component, Fragment } from 'react'

import Menu from './components/Menu/Menu.jsx'

import './index.scss'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      states: ''
    }
  }

  render () {
    return (
      <Fragment>
        <h1>REACT</h1>
        <ul className='Menu'>
          <Menu name='Menu Item' />
        </ul>
      </Fragment>
    )
  }
}
