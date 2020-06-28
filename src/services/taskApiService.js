export class TaskApiService {
    static API_URL = "http://localhost:3000";

    static getAllTasks(successCallback, errorCallback) {
        fetch(`${TaskApiService.API_URL}/tasks`)
            .then(resp => resp.json())
            .then(data => {
                if (typeof successCallback === 'function') {
                    successCallback(data);
                }
            })
            .catch(err => {
                if (typeof errorCallback === 'function') {
                    errorCallback(data);
                }
            })
    }

    static addTask(task, successCallback, errorCallback) {
        fetch(`${TaskApiService.API_URL}/tasks`, {
                method: "POST",
                body: JSON.stringify(task),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(data => {
                if (typeof successCallback === 'function') {
                    successCallback(data);
                }
            })
            .catch(err => {
                if (typeof errorCallback === 'function') {
                    errorCallback(data);
                }
            })
    }

    static updateTask(task, successCallback, errorCallback) {
        if (!task.id) {
            throw new Error('Given task doesn`t have id - it can not be updated');
        }

        fetch(`${TaskApiService.API_URL}/tasks/${task.id}`, {
                method: "PUT",
                body: JSON.stringify(task),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(data => {
                if (typeof successCallback === 'function') {
                    successCallback(data);
                }
            })
            .catch(err => {
                if (typeof errorCallback === 'function') {
                    errorCallback(data);
                }
            })
    }

    static deleteTask(task, successCallback, errorCallback) {
        if (!task.id) {
            throw new Error('Given task doesn`t have id - it can not be deleted');
        }

        fetch(`${TaskApiService.API_URL}/tasks/${task.id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(data => {
                if (typeof successCallback === 'function') {
                    successCallback(data);
                }
            })
            .catch(err => {
                if (typeof errorCallback === 'function') {
                    errorCallback(data);
                }
            })
    }

}