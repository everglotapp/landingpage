import sirv from "sirv"
import express from "express"
import compression from "compression"
import * as sapper from "@sapper/server"
import { createDatabasePool } from "./server/db"
import { json } from "body-parser"

const { NODE_ENV, HOST = "127.0.0.1", PORT = 3000 } = process.env
const dev = NODE_ENV === "development"

const pool = createDatabasePool()
pool.connect().then(() => {
    console.log("[Database Pool] Database connection established")
})

const port = Number(PORT)
express()
    .use(
        compression({ threshold: 0 }),
        sirv("static", { dev }),
        json(),
        sapper.middleware()
    )
    .listen(port, HOST)
    .on("listening", () => {
        console.log(`Server successfully started on port ${port}.`)
    })
    .on("error", (e: NodeJS.ErrnoException) => {
        console.log(`${e.code}: ${e.message}`)
    })
    .on("close", () => {
        console.log(`Server closed.`)
    })
