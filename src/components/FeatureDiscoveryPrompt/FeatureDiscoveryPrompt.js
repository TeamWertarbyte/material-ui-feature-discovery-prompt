import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AutoComplete, IconButton, Paper } from 'material-ui'
import { grey500 } from 'material-ui/styles/colors'

/**
 * Material design feature discovery prompt
 * @see [Feature discovery](https://material.io/guidelines/growth-communications/feature-discovery.html#feature-discovery-design)
 */
export default class FeatureDiscoveryPrompt extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  getStyles () {
    return {
      root: {}
    }
  }

  render () {
    const styles = this.getStyles()
    const {
      children,
    } = this.props

    return (
      <div style={styles.root}>
        {children}
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
  /** Override the inline-styles of the root element. */
  style: PropTypes.object
}
