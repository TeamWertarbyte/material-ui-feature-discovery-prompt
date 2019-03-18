Normal:
```
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import teal from '@material-ui/core/colors/teal';
import Add from '@material-ui/icons/Add';

initialState = {
  isOpen: false
};

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
  <Button onClick={() => setState({isOpen: true})}>Click me!</Button>
  <FeatureDiscoveryPrompt
    onClose={() => setState({isOpen: false})}
    open={state.isOpen}
    backgroundColor={teal[500]}
    title="Title"
    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
  >
    <Fab
      color='secondary'
      onClick={() => setState({isOpen: false})}
    >
      <Add />
    </Fab>
  </FeatureDiscoveryPrompt>
</div>
```
