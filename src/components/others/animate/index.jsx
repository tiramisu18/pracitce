import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
// const Dimensions = require('Dimensions')
// var OnResize = require('react-window-mixins').OnResize

class Anima extends React.Component {
  constructor () {
    super()
  }
  componentDidMount () {
    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    var maxParticles = 1000
    var winWidth = window.innerWidth
    var winHeight = window.innerHeight
    var tela = document.getElementById('rc-canvas')
    // var tela = document.createElement('canvas')
    tela.width = winWidth
    tela.height = winHeight

    var canvas = tela.getContext('2d')

    var Particle = (function () {
      function Particle (canvas, progress) {
        _classCallCheck(this, Particle)

        var random = Math.random()
        this.progress = 0
        this.canvas = canvas

        this.x = winWidth / 2 + (Math.random() * 200 - Math.random() * 200)
        this.y = winHeight / 2 + (Math.random() * 200 - Math.random() * 200)

        this.w = winWidth
        this.h = winHeight
        this.radius = random > 0.2 ? Math.random() * 1 : Math.random() * 3
        this.color = random > 0.2 ? '#d8002c' : '#F9314C'
        this.radius = random > 0.8 ? Math.random() * 2 : this.radius
        this.color = random > 0.8 ? '#7DFFF2' : this.color

                    // this.color  = random > .1 ? "#ffae00" : "#f0ff00" // Alien
        this.variantx1 = Math.random() * 300
        this.variantx2 = Math.random() * 400
        this.varianty1 = Math.random() * 100
        this.varianty2 = Math.random() * 120
      }

      Particle.prototype.render = function render () {
        this.canvas.beginPath()
        this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        this.canvas.lineWidth = 2
        this.canvas.fillStyle = this.color
        this.canvas.fill()
        this.canvas.closePath()
      }

      Particle.prototype.move = function move () {
                    // this.x += (Math.sin(this.progress/this.variantx1)*Math.cos(this.progress/this.variantx2));
                    // this.y += (Math.sin(this.progress/this.varianty1)*Math.cos(this.progress/this.varianty2));
        this.x += Math.sin(this.progress / this.variantx1) * Math.cos(this.progress / this.variantx2)
        this.y += Math.cos(this.progress / this.varianty2)

        if (this.x < 0 || this.x > this.w - this.radius) {
          return false
        }

        if (this.y < 0 || this.y > this.h - this.radius) {
          return false
        }
        this.render()
        this.progress++
        return true
      }

      return Particle
    }())

    var particles = []
    var initNum = popolate(maxParticles)

    function popolate (num) {
      for (var i = 0; i < num; i++) {
        setTimeout(function () {
          particles.push(new Particle(canvas, i))
        }, i * 20)
      }
      return particles.length
    }

    function clear () {
      canvas.globalAlpha = 0.05
      canvas.fillStyle = '#000'
      canvas.fillRect(0, 0, tela.width, tela.height)
      canvas.globalAlpha = 1
    }

    function update () {
      particles = particles.filter(function (p) {
        return p.move()
      })
      if (particles.length < initNum) {
        popolate(1)
      }
      clear()
      requestAnimationFrame(update.bind(this))
    }
    update()
  }
  render () {
    return (
      <div className='animate'>
        <div className='title' >
          <h3>2017-09-02</h3>
          <h1>一起狂欢</h1>
          <h3>山水庄园皇家⑦号店</h3>
        </div>
        <canvas id='rc-canvas' />
      </div>

    )
  }
}

export default Anima
