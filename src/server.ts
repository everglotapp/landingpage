import sirv from "sirv"
import polka from "polka"
import compression from "compression"
import * as sapper from "@sapper/server"
import { createPool } from "./server/db"
import type { Pool } from "pg"

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === "development"

const pool: Pool = createPool()
pool.connect().then(() => {
    console.log("DB connection established")
    pool.query("SELECT * FROM newsletter_subscriptions", (err, res) => {
        console.log(err, res)
        pool.end()
    })
})

polka() // You can also use Express
    .use(
        compression({ threshold: 0 }),
        sirv("static", { dev }),
        sapper.middleware()
    )
    .listen(PORT, (err: any) => {
        if (err) console.log("error", err)
    })
