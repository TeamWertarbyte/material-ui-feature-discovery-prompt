Normal:
```
const { RaisedButton } = require('material-ui');
      <FeatureDiscoveryPrompt
        onRequestClose={() => setState({isOpen: false})}
        open={state.isOpen}
      >
        <RaisedButton label='Click me!' onTouchTap={() => setState({isOpen: true})}/>
      </FeatureDiscoveryPrompt>
```
