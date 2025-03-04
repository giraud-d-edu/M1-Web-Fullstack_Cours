import * as bookRepository from '../repositories/book.repository.ts';
import { Book } from '../models/book.model.ts';


export const getAllBooksService = async (): Promise<Book[]> => {
    return await bookRepository.getAllBooks();
};

export const getBookByIdService = async (id: number): Promise<Book | undefined> => {
    return await bookRepository.getBookById(id);
};

export const createBookService = async (bookData: Omit<Book, 'id'>): Promise<Book> => {
    return await bookRepository.createBook(bookData);
};

export const updateBookService = async (id: number, updatedBookData: Book): Promise<boolean> => {
    return await bookRepository.updateBook(id, updatedBookData);
};

export const deleteBookService = async (id: number): Promise<boolean> => {
    return await bookRepository.deleteBook(id);
};