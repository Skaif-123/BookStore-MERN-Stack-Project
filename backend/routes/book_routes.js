import express from "express";
import { deleteBookById, getAllBooks, getBookById, updateBook, uploadBook } from "../controllers/book_controller.js";


const router = express.Router();
router.post("/upload", uploadBook);
router.get("/getBooks", getAllBooks);
router.get("/getBooks/:id", getBookById);
router.put("/updateBook/:id",updateBook);
router.delete("/deleteBook/:id",deleteBookById);

export default router;
