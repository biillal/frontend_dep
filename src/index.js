import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import store from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from "@material-tailwind/react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

