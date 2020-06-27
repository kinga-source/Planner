export class BookApiService {
    static API_URL = "http://localhost:3000";

    static getAllBooks(successCallback, errorCallback) {
        fetch(`${BookApiService.API_URL}/books`)
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

    static addBook(book, successCallback, errorCallback) {
        fetch(`${BookApiService.API_URL}/books`,
            {
                method: "POST",
                body: JSON.stringify(book),
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

    static updateBook(book, successCallback, errorCallback) {
        if (!book.id) {
            throw new Error('Given book doesn`t have id - it can not be updated');
        }

        fetch(`${BookApiService.API_URL}/books/${book.id}`,
            {
                method: "PUT",
                body: JSON.stringify(book),
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

    static deleteBook(book, successCallback, errorCallback) {
        if (!book.id) {
            throw new Error('Given book doesn`t have id - it can not be deleted');
        }

        fetch(`${BookApiService.API_URL}/books/${book.id}`,
            {
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