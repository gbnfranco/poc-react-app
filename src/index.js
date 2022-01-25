import React from 'react';
import ReactDOM from 'react-dom';
import PrimerApp from './PrimerApp';

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<PrimerApp datos="Información enviada desde el componente padre"/>, divRoot);