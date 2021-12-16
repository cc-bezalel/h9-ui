import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
  }
}

const theme = extendTheme({ colors })


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </ChakraProvider> 
  </React.StrictMode>
</Provider>,
  document.getElementById('root')
);