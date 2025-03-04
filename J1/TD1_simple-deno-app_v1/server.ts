import { Application } from './deps.ts';
import bookRouter from './controllers/book.controller.ts';

const app = new Application();

app.use(bookRouter.routes());
app.use(bookRouter.allowedMethods());

const port = 8000;
console.log(`Server running on port ${port}`);
await app.listen({ port });