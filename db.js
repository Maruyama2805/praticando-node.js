import postgres from "postgres";
import "dotenv/config";

const {DB_USER, DB_PASSWORD, DB_NAME, DB_PORT} = process.env;

// Montando a Connection String no formato esperado pelos bancos de dados
const dbConnectionString = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
export const sql = postgres(dbConnectionString);