import React, { Component } from 'react'
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
  }

  getStyles () {
    const {backgroundColor} = this.props
    const {pos, open} = this.state
    const circleSize = pos.width + 40
    const outerCircleSize = Math.min(window.innerWidth, 900)

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
      }
    }
  }

  open () {
    if (this.content != null) {
      this.setState({pos: this.content.getBoundingClientRect(), open: true})
    }
  }

  componentDidMount () {
    this.content = findDOMNode(this.props.element)
    this.setState({pos: this.content.getBoundingClientRect()})
    this.updateInterval = setInterval(() => {
      if (this.state.open) {
        const pos = this.content.getBoundingClientRect()
        if (pos.top !== this.state.pos.top || pos.left !== this.state.pos.left) {
          this.setState({pos})
        }
      }
    }, 50)
  }

  componentWillUnmount () {
    clearInterval(this.updateInterval)
    this.content = null
  }

  render () {
    const styles = this.getStyles()

    return (
      <div style={styles.root}>
        <div style={styles.circles}>
          <div style={styles.outerCircle} />
          <div style={styles.pulseInnerCircle} />
          <div style={styles.pulseOuterCircle} />
        </div>
      </div>
    )
  }
}

FeatureDiscoveryPrompt.propTypes = {
  /** Defines if the prompt is visible. */
  open: PropTypes.bool.isRequired,
  /** Fired when the the prompt is visible and clicked. */
  onRequestClose: PropTypes.func.isRequired,
  /** The node which will be featured. */
  children: PropTypes.node.isRequired,
  /** Override the inline-styles of the circles element. */
  style: PropTypes.object
}
