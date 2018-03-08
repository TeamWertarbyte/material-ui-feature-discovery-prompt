import React, { Component } from 'react'
import { Typography } from 'material-ui'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import injectStyle from './injectStyle'
/**
 * Material design feature discovery prompt
 * @see [Feature discovery](https://material.io/guidelines/growth-communications/feature-discovery.html#feature-discovery-design)
 */
export default class FeatureDiscoveryPrompt extends Component {
  constructor (props) {
    super(props)
    injectStyle(`
    @keyframes innerPulse {
      0%      { transform: scale(1.0); }    
      100%    { transform: scale(1.1); }
    }`)

    injectStyle(`
    @keyframes outerPulse {
      0%      { transform: scale(1.0); opacity: 0.9 }    
      100%    { transform: scale(2.0); opacity: 0.0 }
    }`)
    this.state = {
      pos: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        width: 1
      }
    }
    this.handleResize = () => {
      this.onResize(window.innerWidth)
    }
  }

  onResize (value) {
    this.getComponentPosition()
    const vw = (window.innerWidth * window.devicePixelRatio)
    const vh = (window.innerHeight * window.devicePixelRatio)
    const drawTextAboveCenter = ((vh / 2) / this.state.pos.top < 1.0)
    const drawTextLeftOfCenter = ((vw / 2) / this.state.pos.top > 1.0)
    //Todo: check the other side
    const minimalDistanceToViewport = vw - (this.state.pos.left + (this.state.pos.width / 2))
    this.setState({drawTextAboveCenter, drawTextLeftOfCenter, minimalDistanceToViewport})

  }

  getStyles () {
    const {backgroundColor} = this.props
    const {pos, open, drawTextAboveCenter, drawTextLeftOfCenter, minimalDistanceToViewport} = this.state
    const circleSize = pos.width + 40
    const outerCircleSize = Math.min(window.innerWidth, 900)
    const textBoxHeight = 100
    const textBoxPaddingAtCircle = (900 * (1 / outerCircleSize)) * 50
    const textBoxPadding = 20
    console.log(1000 * (1 / outerCircleSize))
    return {
      root: {
        zIndex: 1000
      },
      circles: {
        position: 'absolute',
        top: pos.top - 20,
        left: pos.left - 20,
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'inherit' : 'none'
      },
      pulseInnerCircle: {
        position: 'absolute',
        transformOrigin: 'center center',
        height: `${circleSize}px`,
        width: `${circleSize}px`,
        borderRadius: '50%',
        backgroundColor: 'white',
        animation: open ? 'innerPulse 872ms 1.2s cubic-bezier(0.4, 0, 0.2, 1) alternate infinite' : null,
        transform: open ? 'scale(1)' : 'scale(0)',
        transition: 'transform 225ms cubic-bezier(0.4, 0, 0.2, 1)'
      },
      pulseOuterCircle: {
        position: 'absolute',
        transformOrigin: 'center center',
        height: `${circleSize}px`,
        width: `${circleSize}px`,
        borderRadius: '50%',
        backgroundColor: 'white',
        opacity: 0,
        animation: open ? 'outerPulse 1744ms 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite' : null
      },
      outerCircle: {
        position: 'absolute',
        transformOrigin: 'center center',
        transform: open ? 'scale(1.0)' : 'scale(0.8)',
        transition: 'transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1)',
        marginTop: `-${(outerCircleSize / 2) - (circleSize / 2)}px`,
        marginLeft: `-${(outerCircleSize / 2) - (circleSize / 2)}px`,
        height: `${outerCircleSize}px`,
        width: `${outerCircleSize}px`,
        borderRadius: '50%',
        backgroundColor,
        opacity: open ? 0.9 : 0
      },
      textBox: {
        fontFamily: 'Roboto',
        position: 'relative',
        zIndex: 25000,
        paddingLeft: textBoxPaddingAtCircle,
        paddingRight: textBoxPadding,
        width: ((outerCircleSize / 2) + Math.min(minimalDistanceToViewport, (outerCircleSize / 2))) - (textBoxPaddingAtCircle + textBoxPadding),
        height: textBoxHeight,
        marginTop: drawTextAboveCenter ? (outerCircleSize / 2) - (circleSize / 2) - textBoxHeight - 20 : (outerCircleSize / 2) + (circleSize / 2) + 20,
        //marginLeft: drawTextLeftOfCenter ? (outerCircleSize / 2) + (circleSize / 2) : (outerCircleSize / 2) - (circleSize / 2) - textBoxHeight,
        color: 'white',
        fontSize: '16pt'
      }
    }
  }

  open () {
    if (this.content != null) {
      this.setState({pos: this.content.getBoundingClientRect(), open: true})
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleResize)
    this.content = findDOMNode(this.props.element)
    this.setState({pos: this.content.getBoundingClientRect()})
    this.updateInterval = setInterval(() => {
      this.getComponentPosition()
    }, 50)

  }

  getComponentPosition () {
    if (this.state.open) {
      const pos = this.content.getBoundingClientRect()
      if (pos.top !== this.state.pos.top || pos.left !== this.state.pos.left) {
        this.setState({pos})
      }
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleResize)
    clearInterval(this.updateInterval)
    this.content = null
  }

  render () {
    const styles = this.getStyles()

    return (
      <div style={styles.root}>
        <div style={styles.circles}>
          <div style={styles.outerCircle}>
            <div style={styles.textBox}>
              <Typography variant='title' style={{color: 'white'}}>{this.props.title}</Typography><br/>
              <Typography variant='body1' style={{color: 'white'}}>{this.props.text}</Typography>
            </div>
          </div>
          <div style={styles.pulseInnerCircle}/>
          <div style={styles.pulseOuterCircle}/>
        </div>
      </div>
    )
  }
}

FeatureDiscoveryPrompt.propTypes = {
  /** Defines if the prompt is visible. */
  open: PropTypes.bool.isRequired,
  /** Fired when the the prompt is visible and clicked. */
  onClose: PropTypes.func.isRequired,
  /** The node which will be featured. */
  children: PropTypes.node.isRequired,
  /** Override the inline-styles of the circles element. */
  style: PropTypes.object,
  /** Title **/
  title: PropTypes.string.isRequired,
  /** Info text **/
  text: PropTypes.string.isRequired
}
