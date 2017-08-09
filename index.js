import React from 'react'
import { render } from 'react-dom'
import App from './containers/app'
import Router from 'sheet-router'
import { createStore } from 'redux'

const initialState = require('./state')

const reducer = require('./reducer')

const app = document.createElement('div')
document.querySelector('main').appendChild(app)

const store = createStore(reducer, initialState)
const { getState, dispatch, subscribe } = store

const route = Router({ default: '/404' }, [
  ['/', (params) => App]
])

subscribe(() => {
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, app)
})

render(<App />, app)

dispatch({type: 'INIT'})
