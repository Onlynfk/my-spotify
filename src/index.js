
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DataLayer} from './DataLayer';
import reducer, {intialState} from './reducer';



ReactDOM.render(
<DataLayer intialState={intialState} reducer={reducer}>
<App />
</DataLayer>,
  document.getElementById('root')
);

