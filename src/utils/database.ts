import { Pool } from "pg";

let conn: any;

if (!conn){
    conn = new Pool({
        user: 'postgres',
        password: 'Fercho2023!',
        host:'localhost',
        port: 5432,
        database:'datosinmuebles'
    })
}
export {conn};  