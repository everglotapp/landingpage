import { db } from "../server/db"
import log from "../logger"
import type { Request, Response } from "express"

const chlog = log.child({
    namespace: "subscribe",
})

export async function post(req: Request, res: Response, _next: () => void) {
    chlog.info("Subscribe request")
    // TODO: Handle body encoded as form data as opposed to JSON
    res.setHeader("Content-Type", "application/json")

    chlog.trace("Parsing ip")
    const ip = parseIp(req)
    // TODO: validate email
    if (!req.body || !req.body.email) {
        res.end(JSON.stringify({ success: false }))
        return
    }
    chlog.trace("Inserting subscription request")
    const queryResult = await db?.query({
        text: "INSERT INTO newsletter_subscriptions(email, ip) VALUES($1, $2) RETURNING *",
        values: [req.body.email, ip],
    })
    res.end(
        JSON.stringify({ success: queryResult && queryResult.rowCount === 1 })
    )
}

const parseIp = (req: Request) =>
    (typeof req.headers["x-forwarded-for"] === "string" &&
        req.headers["x-forwarded-for"].split(",").shift()) ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    // @ts-expect-error
    req.connection?.socket?.remoteAddress
