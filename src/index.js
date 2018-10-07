import React from 'react'
import ReactDOM from 'react-dom'
import Fist from './Fist'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(
    <BrowserRouter><Fist/></BrowserRouter>,
    document.getElementById('root'))
