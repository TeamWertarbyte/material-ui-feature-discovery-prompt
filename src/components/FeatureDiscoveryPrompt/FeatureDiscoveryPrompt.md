```jsx
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import teal from '@mui/material/colors/teal';
import Add from '@mui/icons-material/Add';
import React from 'react';

const [isOpen, setIsOpen] = React.useState(false);

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
  <Button onClick={() => setIsOpen(true)}>Click me!</Button>
  <FeatureDiscoveryPrompt
    onClose={() => setIsOpen(false)}
    open={isOpen}
    backgroundColor={teal[500]}
    title="Title"
    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
  >
    <Fab
      color='secondary'
      onClick={() => setIsOpen(false)}
    >
      <Add />
    </Fab>
  </FeatureDiscoveryPrompt>
</div>
```
