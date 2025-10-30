  dotenv.config({ path: "E:/MERN PROJECTS/Book Store/backend/.env" });
  import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectToDB } from "./database/db.js";
import book_routes from "./routes/book_routes.js";

  const app = express();
  connectToDB();

  app.use(express.json());
  // app.use(cors())  for general allow everyone who you find
  app.use(cors())
    
  app.use("/book/api", book_routes);

  app.listen(process.env.PORT, () => {
    console.log("server running at 3000");
  });
