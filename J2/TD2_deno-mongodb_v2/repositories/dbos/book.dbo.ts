import { ObjectId } from "../../deps.ts";
import {Book} from "../../services/models/book.model.ts";

export interface BookDBO {
    _id: ObjectId;
    titre: string;
    auteur: string;
    isbn: string;
    datePublication: string;
}

export function fromBookDboToBook(dbo: BookDBO): Book {
    // FIXME : hard copy include _id
    return {
        ...dbo,
        id: dbo._id.toString()
    }
}

export function fromBookToBookDbo(book: Book): BookDBO {
    // FIXME : hard copy include id
    return {
        ...book,
        _id: new ObjectId(book.id)
    }
}
