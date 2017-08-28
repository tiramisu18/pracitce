import React from 'react'
import { render } from 'react-dom'

import Bundle from '../src/components/lazyload'
// import {Loading, Tabs} from 'element-react'
import Homepage from './pages/index'
import { Spin } from 'antd'
import './style/index.css'

const loadComponent = (Component) => () => (
  <Bundle load={Component}>
    {
            (Component) => Component ? <Component /> : <Spin><div style={{height: '100vh'}} /></Spin>
        }
  </Bundle>
)
class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='md-body'>
        <Homepage />
      </div>

    )
  }
}

render(<App />, document.getElementById('root'))
