import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#bace24',
    800: '#bace24',
    700: '#bace24',
    600: '#bace24',
    500: '#bace24',
    400: '#bace24',
    300: '#bace24',
    200: '#bace24',
    100: '#bace24',
  },
  shadow: {
    buttonShadow: '0 0 0 3px #bace2475'
  }
}

const theme = extendTheme({ colors })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
