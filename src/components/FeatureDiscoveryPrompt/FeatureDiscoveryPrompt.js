import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
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
    const {pos} = this.state
    const circleSize = pos.width + 40
    const outerCircleSize = Math.min(window.innerWidth, 900)
    return {
      root: {
        zIndex: 1000,
      },
      circles: {
        position: 'relative',
        top: `-${(pos.height / 2) + (circleSize / 2)}px`,
        left: `${(pos.width / 2) - (circleSize / 2)}px`,
      },
      pulseInnerCircle: {
        position: 'absolute',
        transformOrigin: 'center center',
        height: `${circleSize}px`,
        width: `${circleSize}px`,
        borderRadius: '50%',
        backgroundColor: 'white',
        opacity: 0.9,
        animation: 'innerPulse 872ms cubic-bezier(0.4, 0, 0.2, 1) alternate infinite'
      },
      pulseOuterCircle: {
        position: 'absolute',
        transformOrigin: 'center center',
        height: `${circleSize}px`,
        width: `${circleSize}px`,
        borderRadius: '50%',
        backgroundColor: 'white',
        opacity: 0.9,
        animation: 'outerPulse 1744ms cubic-bezier(0.4, 0, 0.2, 1) infinite'
      },
      outerCircle: {
        position: 'absolute',
        transformOrigin: 'center center',
        marginTop: `-${(outerCircleSize / 2) - (circleSize / 2)}px`,
        marginLeft: `-${(outerCircleSize / 2) - (circleSize / 2)}px`,
        height: `${outerCircleSize}px`,
        width: `${outerCircleSize}px`,
        borderRadius: '50%',
        backgroundColor: 'orange',
        opacity: 0.9,
      }
    }
  }

  componentDidMount () {
    this.setState({pos: this.content.getBoundingClientRect()})
  }

  render () {
    console.log('render')
    const styles = this.getStyles()
    const {
      children
    } = this.props

    return (
      <div style={{...styles.root, position: 'relative'}}>
        {React.cloneElement(React.Children.only(children), {
          ref: (ref) => {
            this.content = findDOMNode(ref)
          }
        })}
        <div style={{...styles.circles}}>
          <div style={{...styles.outerCircle}}/>
          <div style={{...styles.pulseInnerCircle}}/>
          <div style={{...styles.pulseOuterCircle}}/>
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
