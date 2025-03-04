import { Router, RouterContext, Context, Omit } from '../deps.ts';
import * as bookService from '../services/book.service.ts';
import { Book } from '../models/book.model.ts';

const router = new Router();

router
    .get('/books', getAllBooksController)
    .get('/books/:id', getBookByIdController)
    .post('/books', createBookController)
    .put('/books/:id', updateBookController)
    .delete('/books/:id', deleteBookController);

async function getAllBooksController(ctx: Context) {
    const books = await bookService.getAllBooksService();
    ctx.response.body = books;
}

async function getBookByIdController(ctx: RouterContext<"/books/:id">) {
    const idParam = ctx.params.id;

    if (!idParam) {
        ctx.response.status = 400;
        ctx.response.body = { error: "Missing book ID" };
        return;
    }
    const id = parseInt(idParam, 10);
    if (isNaN(id)) {
        ctx.response.status = 400;
        ctx.response.body = { error: "Invalid book ID format" };
        return;
    }

    const book = await bookService.getBookByIdService(id);
    if (book) {
        ctx.response.body = book;
    } else {
        ctx.response.status = 404;
        ctx.response.body = { error: "Book not found" };
    }
}

async function createBookController(ctx: Context) {
    try {
        if (!ctx.request.hasBody) {
            ctx.response.status = 400;
            ctx.response.body = { error: "Request body is required" };
            return;
        }
        const body = await ctx.request.body({ type: 'json' }).value;
        const { titre, auteur, isbn, datePublication } = body;

        if (!titre || !auteur || !isbn || !datePublication) {
            ctx.response.status = 400;
            ctx.response.body = { error: "Missing required fields (titre, auteur, isbn, datePublication)" };
            return;
        }

        const newBookData: Omit<Book, 'id'> = { titre, auteur, isbn, datePublication };
        const createdBook = await bookService.createBookService(newBookData);
        ctx.response.status = 201;
        ctx.response.body = createdBook;

    } catch (e) {
        console.error("Error creating book:", e);
        ctx.response.status = 500;
        ctx.response.body = { error: "Internal server error" };
    }
}


async function updateBookController(ctx: RouterContext<"/books/:id">) {
    const idParam = ctx.params.id;
    if (!idParam) {
        ctx.response.status = 400;
        ctx.response.body = { error: "Missing book ID" };
        return;
    }
    const id = parseInt(idParam, 10);
    if (isNaN(id)) {
        ctx.response.status = 400;
        ctx.response.body = { error: "Invalid book ID format" };
        return;
    }

    try {
        if (!ctx.request.hasBody) {
            ctx.response.status = 400;
            ctx.response.body = { error: "Request body is required" };
            return;
        }
        const body = await ctx.request.body({ type: 'json' }).value;
        const { titre, auteur, isbn, datePublication } = body;

        if (!titre || !auteur || !isbn || !datePublication) {
            ctx.response.status = 400;
            ctx.response.body = { error: "Missing required fields for update (titre, auteur, isbn, datePublication)" };
            return;
        }

        const updatedBookData: Book = { id, titre, auteur, isbn, datePublication };
        const success = await bookService.updateBookService(id, updatedBookData);
        if (success) {
            ctx.response.status = 200;
            ctx.response.body = { message: "Book updated successfully" };
        } else {
            ctx.response.status = 404;
            ctx.response.body = { error: "Book not found" };
        }

    } catch (e) {
        console.error("Error updating book:", e);
        ctx.response.status = 500;
        ctx.response.body = { error: "Internal server error" };
    }
}


async function deleteBookController(ctx: RouterContext<"/books/:id">) {
    const idParam = ctx.params.id;
    if (!idParam) {
        ctx.response.status = 400;
        ctx.response.body = { error: "Missing book ID" };
        return;
    }
    const id = parseInt(idParam, 10);
    if (isNaN(id)) {
        ctx.response.status = 400;
        ctx.response.body = { error: "Invalid book ID format" };
        return;
    }

    const success = await bookService.deleteBookService(id);
    if (success) {
        ctx.response.status = 204;
        ctx.response.body = null;
    } else {
        ctx.response.status = 404;
        ctx.response.body = { error: "Book not found" };
    }
}


export default router;
