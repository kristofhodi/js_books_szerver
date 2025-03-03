import express from "express"

import { addBook, deleteBook, getAllbooks, getAllbooksByid, updateBook } from "../controller/bookscontroller.js"

const router = express.Router()

router.get('/', getAllbooks)

router.get('/:id', getAllbooksByid)

router.post('/', addBook)

router.put('/:id', updateBook)

router.delete('/:id', deleteBook)

export default router