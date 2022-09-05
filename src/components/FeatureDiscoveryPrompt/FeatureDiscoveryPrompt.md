Normal:
```
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import teal from '@mui/material/colors/teal';
import Add from '@mui/icons-material/Add';

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
