import React, {
    useState,
    useEffect
} from 'react';
import {
    TaskListItem
} from "./TaskListItem";
import {
    TaskApiService
} from "../../services/TaskApiService";

export const TaskList = () => {
        const [tasks, setBooks] = useState([]);

        useEffect(() => {
            TaskApiService.getAllTasks(
                tasks => setBooks(tasks),
                err => console.log(err)
            )
        }, [])

        if (tasks.length === 0) return null;
        return ( <
                table className = {
                    "tasks"
                } >
                <
                thead >
                <
                tr >
                <
                th > Title < /th>

                <
                /tr> < /
                thead > <
                tbody > {
                    tasks.map(tasks => < TaskListItem task = {
                            task
                        }
                        key = {
                            task.id
                        }
                        />)} < /
                        tbody > <
                        /table>
                    )
                }