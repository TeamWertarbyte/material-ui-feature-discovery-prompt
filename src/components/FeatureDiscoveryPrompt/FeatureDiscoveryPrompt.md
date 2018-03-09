Normal:
```
const { Button } = require('material-ui');
const { teal } = require('material-ui/colors');
const { Add } = require( 'material-ui-icons');

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
  <Button onClick={() => setState({isOpen: true})}>Click me!</Button>
  <FeatureDiscoveryPrompt
    onClose={() => setState({isOpen: false})}
    open={state.isOpen}
    backgroundColor={teal[500]}
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
```
