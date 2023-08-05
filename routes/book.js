const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// POST /api/book - Create a new book
router.post('/', async (req, res) => {
  try {
    const { title, author, genre, publishedYear } = req.body;
    const newBook = await Book.create({ title, author, genre, publishedYear });
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create book' });
  }
});

// GET /api/book - Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// GET /api/book/:id - Get book by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch book' });
  }
});

// PUT /api/book/:id - Update book by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update book' });
  }
});

// DELETE /api/book/:id - Delete book by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: `Book with ID ${id} deleted` });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
});

module.exports = router;
