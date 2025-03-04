import {Book, BookCandidate} from "../services/models/book.model.ts";
import { getBooksCollection } from "./database.ts";
import { ObjectId } from "https://deno.land/x/mongo@v0.34.0/mod.ts";
import { NotFoundException } from "../utils/exceptions.ts";
import {fromBookDboToBook} from "./dbos/book.dbo.ts";

export const getAllBooks = async (): Promise<Book[]> => {
    const booksCollection = getBooksCollection();
    const dbos = await booksCollection.find({}).toArray();
    return dbos.map(dbo => fromBookDboToBook(dbo));
};

export const getBookById = async (id: string): Promise<Book> => {
    const booksCollection = getBooksCollection();
    const objectId = new ObjectId(id);
    const dbo = await booksCollection.findOne({ _id: objectId });
    if (!dbo) {
        throw new NotFoundException("Book not found");
    }
    return fromBookDboToBook(dbo);
};

export const createBook = async (
    bookCandidate: BookCandidate,
): Promise<Book> => {
    const booksCollection = getBooksCollection();
    const insertId = await booksCollection.insertOne({ ...bookCandidate });
    return await getBookById(insertId.toString());
};

export const updateBook = async (updatedBookData: Book): Promise<Book> => {
    const booksCollection = getBooksCollection();
    const objectId = new ObjectId(updatedBookData.id);
    await booksCollection.updateOne({ _id: objectId }, {
        $set: updatedBookData,
    });
    return await getBookById(updatedBookData.id.toString());
};

export const deleteBook = async (id: string): Promise<boolean> => {
    const booksCollection = getBooksCollection();
    const objectId = new ObjectId(id);
    const deleteCount = await booksCollection.deleteOne({ _id: objectId });
    return deleteCount > 0;
};
