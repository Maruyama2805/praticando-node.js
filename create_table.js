import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//     console.log("Tabela 'videos' deletada com sucesso!");
// })

sql`
    CREATE TABLE IF NOT EXISTS videos (
        id UUID PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(() => {
    console.log("Tabela 'videos' criada com sucesso!");
}).catch((error) => {
    console.error("Erro ao criar a tabela 'videos':", error);
});