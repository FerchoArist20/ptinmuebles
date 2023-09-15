import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../../utils/database";
//import { Query } from "pg";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const text = "SELECT * FROM inmueblesdb WHERE id = $1";
        const values = [id];
        const result = await conn.query(text, values);

        if (result.rowCount === 0)
          return res.status(404).json({ message: "Task Not Found" });

        return res.json(result.rows[0]);
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }
    case "PUT":
      try {
        const { nombre, descripcion, direccion, precio } = body;
        const text =
          "UPDATE inmueblesdb SET nombre = $1, descripcion = $2, direccion = $3, precio = $4 WHERE id = $5 RETURNING *"; ////////////////////////////
          const values = [nombre, descripcion, direccion, precio, id];
        const result = await conn.query(text, values);

        if (result.rowCount === 0)
            return res.status(404).json({ message: "Task Not Found" });
        return res.json(result.rows[0]);

      } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }
    case "DELETE":
      try {
        const text = "DELETE FROM inmueblesdb WHERE id = $1 RETURNING *";
        const values = [id];
        const result = await conn.query(text, values);

        if (result.rowCount === 0)
          return res.status(404).json({ message: "Task Not Found" });

        return res.json(result.rows[0]);
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }
    default:
      return res.status(400).json({ message: "Method are not supported" });
  }
};