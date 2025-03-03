import books from '../data/books.js'

export const getAllbooks = (req, res) => {
    res.status(200).json(books)
}

export const getAllbooksByid = (req, res) => {
    const id = req.params.id
    if (id < 0 || id >= books.length) {
        return res.status(404).json({message: 'not found'})
    }
    res.status(200).json(books[id])
}

export const addBook = (req, res) => {
    const {author, title, year} = req.body
    if (!author || !title || !year) {
        return res.status(404).json({message: 'missing data'})
    }
    const newBook = {author, title, year}
    books.push(newBook)
    res.status(201).json(newBook)
}

export const updateBook = (req, res) => {
    const id = req.params.id
    if (id < 0 || id >= books.length) {
        return res.status(404).json({message: 'not found'})
    }
    const {author, title, year} = req.body
    if (!author || !title || !year) {
        return res.status(404).json({message: 'missing data'})
    }
    books[id] = {author, title, year}
    res.status(200).json(books[id])
}

export const deleteBook = (req, res) => {
    const id = req.params.id
    if (id < 0 || id >= books.length) {
        return res.status(404).json({message: 'not found'})
    }
    books.splice(id, 1)
    res.status(200).json({message: 'delete successful'})
}
