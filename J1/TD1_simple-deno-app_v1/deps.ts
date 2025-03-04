export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export { Application, Router, Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";
export type { RouterContext } from "https://deno.land/x/oak@v11.1.0/mod.ts";
