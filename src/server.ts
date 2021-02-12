import sirv from "sirv"
import polka from "polka"
import compression from "compression"
import * as sapper from "@sapper/server"
import { createDatabasePool } from "./server/db"
import type { Pool } from "pg"
const { json } = require("body-parser")

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === "development"

const pool: Pool = createDatabasePool()
pool.connect().then(() => {
    console.log("[Database Pool] Database connection established")
})

polka() // You can also use Express
    .use(
        compression({ threshold: 0 }),
        sirv("static", { dev }),
        json(),
        sapper.middleware()
    )
    .listen(PORT, (err: any) => {
        if (err) console.log("error", err)
    })
