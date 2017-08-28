import React from 'react'
// import PrintProvider, { Print } from 'react-easy-print'
// import {DatePicker} from 'element-react'
// var PrintTemplate = require('react-print')

import { Anchor, Carousel, Icon, Table } from 'antd'
import PicDetailsDemo from 'md_components/others/pictureshow'
import WrappedForm from 'md_components/others/form'
import Anima from 'md_components/others/animate'
import './style/index.css'

const { Link } = Anchor
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Phone',
  dataIndex: 'phone',
  key: 'phone'
}]
const data = [{
  key: '1',
  name: '储大大',
  phone: 123456789
}, {
  key: '2',
  name: 'xxx',
  phone: 456789123
}]
class Homepage extends React.Component {
  constructor () {
    super()
  }
  componentDidMount () {
    var c = document.getElementById('canTitle')
    var ctx = c.getContext('2d')
    c.width = 1043
    c.height = 63
    ctx.font = '35px Arial'
    var grd = ctx.createLinearGradient(0, 0, 400, 0)
    // grd.addColorStop('0', 'magenta')
    grd.addColorStop('0', '#E798C7')
    grd.addColorStop('1', '#19C3DE')
    ctx.fillStyle = grd
    ctx.fillText('山水庄园皇家⑦号土嗨PARTY', 0, 50)
  }
  render () {
    return (
      <div>
        <div className='head'>
          <div className='head-content'>
            <div className='head-content-logo' />
            <canvas id='canTitle' style={{marginLeft: 150}} />
          </div>
        </div>
        <div className='content'>
          <div className='conpage content-home'>
            <div className='home-contain'>
              <Anima />
              <div className='home-down'>
                <div className='down-icon'>
                  <a className='icon-hover' href='#page1'>
                    <Icon type='down' className='icon' style={{fontSize: 22}} />
                    <Icon type='down' className='icon' style={{fontSize: 22}} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='conpage content-page1'>
            <a name='page1' />
            <div className='page1-frame' >
              <div className='page1-frame-contain'>
                <div className='frcon-text'><a href='#page2'>狂欢项目</a></div>
              </div>
            </div>
          </div>
          <div className='conpage content-page2'>
            <div>
              <a name='page2' />
              <PicDetailsDemo />
              <div className='page2-text'>
                <Icon type='arrow-right' style={{fontSize: 40}} />
                <span className='page2-text-contain'><a href='#page3'>速来报名</a></span>
              </div>
            </div>
          </div>
          <hr />
          <div className='smallpage content-page3'>
            <a name='page3' />
            <div className='page3-contain'>
              <WrappedForm />
            </div>
          </div>
          <hr />
          <div className='smallpage content-page4'>
            <div className='page4-contain'>
              <Table columns={columns} dataSource={data} size='small' title={function () {
                return '已确定人员名单'
              }} />
            </div>
          </div>

        </div>
        <hr />
        <div className='foot'>
          <div className='foot-content'>
            <h1>储大大倾情筹划</h1>
            <img src={require('./images/chu.gif')} />
          </div>

        </div>
      </div>
    )
  }
}
export default Homepage
