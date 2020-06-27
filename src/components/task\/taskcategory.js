import React, {useState, useEffect} from 'react';
import {BookListItem} from "./BookListItem";
import {BookApiService} from "../../services/BookApiService";

export const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        BookApiService.getAllBooks(
            books => setBooks(books),
            err => console.log(err)
        )
    },[])

    if (books.length === 0) return null;
    return (
        <table className={"books"}>
            <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Operation</th>
            </tr>
            </thead>
            <tbody>
                {books.map(book => <BookListItem book={book} key={book.id}/>)}
            </tbody>
        </table>
    )
}