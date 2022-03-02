import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import App from './App'
import { createTheme, ThemeProvider } from '@mui/material'
import store from './store/store'
import { Provider } from 'react-redux'

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
