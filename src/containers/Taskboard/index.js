import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constanst';
import TaskList from '../../components/TaskList';

const listTask = [
   {
      id: 1,
      title: "Read Hook",
      description: "Read material ui book",
      status: 0
   },
   {
      id: 2,
      title: "Play Game",
      description: "Read Game",
      status: 2
   },
   {
      id: 3,
      title: "Play Bowling",
      description: "",
      status: 1
   }
];

class TaskBoard extends Component {

   renderBoard() {
      let xhtml = null;
      xhtml = (
         <Grid container spacing={3}>
            {
               STATUSES.map((status, index) => {
                  const taskFiltered = listTask.filter(task => task.status === status.value);
                  return (
                     <TaskList tasks={taskFiltered} status={status} key={index} />
                  );
               })
            }
         </Grid>
      );
      return xhtml;
   }

   render() {
      const { classes } = this.props;
      return (
         <div className={classes.taskBoard}>
            <Button variant="contained" color="primary" className={classes.button}>
               <AddIcon /> Thêm Công Việc
                </Button>
            {this.renderBoard()}
         </div>
      );
   }
}

export default withStyles(styles)(TaskBoard);