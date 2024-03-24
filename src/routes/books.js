import express from 'express'
import BooksController from '../controller/books.js'
const router = express.Router()

router.get('/',BooksController.getAllBooks)
router.post('/create',BooksController.create)
router.post('/rent',BooksController.rentBook)
router.post('/return',BooksController.returnBook)


export default router