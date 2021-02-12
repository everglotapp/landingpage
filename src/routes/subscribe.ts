import { db } from "../server/db"

export async function post(req, res, next) {
    console.log("subscribe request", req.ip)

    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(true))
}
