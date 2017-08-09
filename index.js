import React from 'react'
import { render } from 'react-dom'
import Router from 'sheet-router'
import { createStore } from 'redux'

const initialState = require('./state')

const reducer = require('./reducer')

const App = require('./containers/app')
const Apidocs = require('./containers/apidocs')

const app = document.createElement('div')
document.querySelector('main').appendChild(app)

const store = createStore(reducer, initialState)
const { getState, dispatch, subscribe } = store

const route = Router({ default: '/404' }, [
  ['/', (params) => Apidocs]
])

subscribe(() => {
  console.log(getState().route);
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, app)
})

render(<App name='SMTP2GO' />, app)

dispatch({type: 'INIT'})
