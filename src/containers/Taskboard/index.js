import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

class TaskBoard extends Component {

    renderBoard(){
        let xhtml = null;
        xhtml = (
            <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                    READY
                </Grid>
                <Grid item md={4} xs={12}>
                    PROCESSING
                </Grid>
                <Grid item md={4} xs={12}>
                    COMPLETE
                </Grid>
            </Grid>
        );
        return xhtml;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskBoard}>
                <Button variant="contained" color="primary" className={classes.button}>
                    <AddIcon/> Thêm Công Việc
                </Button>
                {this.renderBoard()}
            </div>
        );
    }
}

export default withStyles(styles)(TaskBoard);