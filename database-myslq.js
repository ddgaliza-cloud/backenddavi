import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DatabaseMYSQL {

  

  async list(search) {
    let videos;

    if (search) {

      
      [videos] = await sql.execute(
        'SELECT * FROM videos WHERE title LIKE ?',
        [`%${search}%`]
      );

    } else {

      [videos] = await sql.execute(
        'SELECT * FROM videos'
      );

    }

    return videos;
  }
}