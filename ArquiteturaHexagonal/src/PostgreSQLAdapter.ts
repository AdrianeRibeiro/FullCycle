import pgp from "pg-promise"
import Connection from "./Connection";

export default class PostgreSQLAdapter implements Connection {
  connection: any

  constructor() {
    const url = "postgres://postgres:postgres@localhost:5432"
    this.connection = pgp()(url)
  }

  query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params)
  }

  one(statement: string, params: any): Promise<any> {
    return this.connection.one(statement, params)
  }

  close(): Promise<any> {
    return this.connection.$pool.end()
  }
}