import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import StatusInfo from "./StatusInfo";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { useAppState } from "../context/StateContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function TaskList(props) {
  const { filter = '' } = props; //domyslnie pusty string aby zapobiec bledom
  const classes = useStyles();
  const [editMode, setEditMode] = useState({
    editID: null,
    editmodus: false,
    title: "",
    description: "",
  });
  const {
    tasks,
    setTasks,
    setEditTitle,
    editTitle,
    setStatus,
    status,
    editDescription,
    setEditDescription,
  } = useAppState();

//remove function
  const removeTask = (index) => {
    const newTodos = [...tasks];
    newTodos.splice(index, 1);
    setTasks(newTodos);
  };

  //edit function
  const editTask = (e, index) => {
    e.preventDefault();
    const newTodos = [...tasks];
    newTodos[index].title = editTitle;
    newTodos[index].description = editDescription;

    setTasks(newTodos);
    setEditMode({
      editID: null,
      editmodus: false,
      title: "",
      description: "",
    });
    setEditTitle("");
    setEditDescription("");
  };

//changing to editing
  const runEditMode = ({ title, description, taskid, editmodus }) => {
    setEditTitle(title);
    setEditDescription(description);
    setEditMode(
        {
          editID: taskid,
          editmodus: editmodus,
        },
    );
  };

  const renderTasks = (tasks) => {
    const mappedTasks = tasks.map((task, index) => (
        <Fragment>
          <div
              style={editMode.editmodus === true ? { display: "none" } : null}
          >
            <ListItem alignItems="flex-start">
              <ListItemText
                  primary={task.title}
                  secondary={task.description}
              />
              <IconButton
                  onClick={() =>
                      runEditMode(
                          {
                            title: task.title,
                            description: task.description,
                            taskid: task.id,
                            editmodus: true,
                          },
                      )}
              >
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => removeTask(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </div>
          <div
              style={editMode.editID !== task.id ? { display: "none" } : null}
          >
            <TextField
                margin="dense"
                label="Title"
                type="text"
                fullWidth
                variant="outlined"
                value={editTitle === "" ? task.title : editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
            />
            <TextField
                margin="dense"
                label="Description"
                type="text"
                multiline
                rowsMax={4}
                fullWidth
                variant="outlined"
                value={editDescription === ""
                    ? task.description
                    : editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Age
              </InputLabel>
              <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  label="Status"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Done</MenuItem>
                <MenuItem value={20}>In Progress</MenuItem>
              </Select>
            </FormControl>
            <button onClick={(e) => editTask(e, index)}>
              <p>EDIT</p>
            </button>
          </div>
        </Fragment>
    ));
    return mappedTasks;
  }
//bedzie filtrowac taski na podstawie tego parametru
  const filterTasks = (tasks) => !filter ? tasks : tasks.filter(task =>
      task.title.toUpperCase().includes(filter.toUpperCase()) || task.description.toUpperCase().includes(filter.toUpperCase()))

  return (
      <div>
        <Typography
            variant="h5"
            component="h2"
            style={editMode.editmodus === false ? { display: "none" } : null}
        >
          Edit Task
        </Typography>
        <div style={editMode.editmodus === true ? { display: "none" } : null}>
          <StatusInfo tasks={tasks} />
          <Typography variant="h5" component="h2">
            My Tasks
          </Typography>
        </div>
        <List className={classes.root}>
          {renderTasks(filterTasks(tasks))} //wywolanie filter task
        </List>
      </div>
  );
}