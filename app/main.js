import React from 'react';
import App from 'app/components/App';

const app = document.createElement('div');

document.body.appendChild(app);

React.render(<App/>, app);
