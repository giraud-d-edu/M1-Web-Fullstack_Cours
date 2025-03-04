import { Book } from '../models/book.model.ts';

const books: Book[] = [
    { id: 1, titre: "Le Seigneur des Anneaux", auteur: "J.R.R. Tolkien", isbn: "978-0618260263", datePublication: "1954-07-29" },
    { id: 2, titre: "Orgueil et Préjugés", auteur: "Jane Austen", isbn: "978-0141439518", datePublication: "1813-01-28" },
];

let nextId = 3;

export const getAllBooks = async (): Promise<Book[]> => {
    return books;
};

export const getBookById = async (id: number): Promise<Book | undefined> => {
    return books.find(book => book.id === id);
};

export const createBook = async (bookData: Omit<Book, 'id'>): Promise<Book> => {
    const newBook = { id: nextId++, ...bookData };
    books.push(newBook);
    return newBook;
};

export const updateBook = async (id: number, updatedBookData: Book): Promise<boolean> => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books[index] = updatedBookData;
        return true;
    }
    return false;
};

export const deleteBook = async (id: number): Promise<boolean> => {
    const initialLength = books.length;
    const newBooks = books.filter(book => book.id !== id);
    books.length = 0;
    books.push(...newBooks);
    return books.length < initialLength;
};