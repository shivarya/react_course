import axios from "axios";

//this is service
export async function getBooks(limit=10,start=0,order='asc', list = []){
    const res = await axios.get(`/api/book/books?limit=${limit}&skip=${start}&order=${order}`)
    return [...list,...res.data]
}

export async function addBook(book_data){
    const res = await axios.post(`/api/book`, book_data)
    return res.data;
}

export async function editBook(book_data) {
    const res = await axios.put(`/api/book`, book_data)
    return res.data;
}

export async function deleteBook(bookId) {
        const res = await axios.delete(`/api/book?id=${bookId}`)
        return res.data;
}

export async function clearNewBook(){
    return {
        type: 'CLEAR_NEW_BOOK',
        payload: null
    }
}