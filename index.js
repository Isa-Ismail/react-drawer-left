import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <div style={{display: 'flex', justifyContent:'center', backgroundColor: 'silver', alignItems: 'center'}}>
        <Demo />
        <h2>Hello</h2>
      </div>
    </StyledEngineProvider>
  </React.StrictMode>
);