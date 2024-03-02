
import React from 'react';
import Area from './components/area/area';
import BaseElement from './components/baseElement/baseElement';
const App = () => {

  return(
    <Area isSelector={true}>
        <BaseElement></BaseElement>
        <BaseElement></BaseElement>
        <BaseElement></BaseElement>
    </Area>
  )
};

export default App;
