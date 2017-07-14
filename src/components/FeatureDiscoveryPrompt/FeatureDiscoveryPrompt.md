Normal:
```
const { RaisedButton,FloatingActionButton } = require('material-ui');
const { ContentAdd} = require( 'material-ui/svg-icons');

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
  <RaisedButton label='Click me!' onTouchTap={() => setState({isOpen: true})} />
  <FeatureDiscoveryPrompt
    onRequestClose={() => setState({isOpen: false})}
    open={state.isOpen}
    backgroundColor='rgb(0,150,136)'
    title="Title"
    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
  >
    <FloatingActionButton onTouchTap={() => setState({isOpen: true})}> <ContentAdd /> </FloatingActionButton>
  </FeatureDiscoveryPrompt>
</div>
```
