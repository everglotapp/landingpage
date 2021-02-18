import { db } from "../server/db"
import type { SapperRequest, SapperResponse } from "@sapper/server"

export async function post(
    req: SapperRequest & { body: any },
    res: SapperResponse,
    _next: () => void
) {
    console.log("subscribe request")
    // TODO: Handle body encoded as form data as opposed to JSON
    res.setHeader("Content-Type", "application/json")

    console.log(req);

    console.log("Parsing ip")
    const ip = parseIp(req)
    // TODO: validate email

    if (!req.body || !req.body.email) {
        res.end(JSON.stringify({ success: false }))
        return
    }
    const queryResult = await db?.query({
        text:
            "INSERT INTO newsletter_subscriptions(email, ip) VALUES($1, $2) RETURNING *",
        values: [req.body.email, ip],
    })
    res.end(
        JSON.stringify({ success: queryResult && queryResult.rowCount === 1 })
    )
}

const parseIp = (req) =>
    (typeof req.headers["x-forwarded-for"] === "string" &&
        req.headers["x-forwarded-for"].split(",").shift()) ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    req.connection?.socket?.remoteAddress
