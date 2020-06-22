import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import styles from './styles';
import { STATUSES } from '../../constanst';

const listTask = [
  {
    id: 1,
    title: 'Read Hook',
    description: 'Read material ui book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play Game',
    description: 'Read Game',
    status: 2,
  },
  {
    id: 3,
    title: 'Play Bowling',
    description: '',
    status: 1,
  },
];

class TaskBoard extends Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={3}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value,
          );
          return <TaskList tasks={taskFiltered} status={status} key={index} />;
        })}
      </Grid>
    );
    return xhtml;
  }

  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon /> Thêm Công Việc
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TaskBoard);
