import styles from './styles';
import {withStyles} from '@material-ui/core';
import {ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import Taskboard from '../Taskboard/index.js';
import theme from '../../commons/Theme';

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Taskboard/>
            </ThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
