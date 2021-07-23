import React from 'react'
import {ThemeProvider, CssBaseline} from '@material-ui/core'
import theme from '../Theme'
const ProviderMui = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}

export default ProviderMui
