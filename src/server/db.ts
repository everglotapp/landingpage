import { Pool } from "pg"

export function createPool(): Pool {
    return new Pool()
}
