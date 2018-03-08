# Material Feature Discovery Prompt
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/TeamWertarbyte/material-ui-feature-discovery-prompt.svg?branch=master)](https://travis-ci.org/TeamWertarbyte/material-ui-search-bar)
[![Greenkeeper badge](https://badges.greenkeeper.io/TeamWertarbyte/material-ui-feature-discovery-prompt.svg)](https://greenkeeper.io/)

Provide value and encourage return visits by introducing users to new features and functionality at contextually relevant moments.

See this component in [action](https://mui.wertarbyte.com/#material-ui-feature-discovery-prompt/)

## Installation
```shell
npm i --save material-ui-feature-discovery-prompt
```

## Usage
```js
import FeatureDiscoveryPrompt from 'material-ui-feature-discovery-prompt'

// ...
render() {
  return(
    <div>
      <Button onClick={() => setState({isOpen: true})}>Click me!</Button>
      <FeatureDiscoveryPrompt
        onClose={() => setState({isOpen: false})}
        open={state.isOpen}
        backgroundColor='rgb(0,150,136)'
        title="Title"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
       >
          <Button
            color='secondary'
            variant='fab'
            onClick={() => setState({isOpen: false})}
          >
            <Add />
          </Button>
      </FeatureDiscoveryPrompt>
    </div>
  )
}
```
### SearchBar Properties
|Name            |Type        |Default     |Description
|----------------|------------|------------|--------------------------------
|children*       | `node`     |            | The node which will be featured.
|open*           | `bool`     |            | Defines if the prompt is visible.
|onClose*        | `func`     |            | Fired when the the prompt is visible and clicked.
|style           | `object`   |            | Override the inline-styles of the root element.
|title           | `string`   |            | Title.
|text            | `string`   |            | Info text.

\* required property

## License

The files included in this repository are licensed under the MIT license.