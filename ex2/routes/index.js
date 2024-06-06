const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiBaseUrl = 'http://backend:17000';

// Página principal com a lista de livros
router.get('/', async (req, res, next) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/books`);
    res.render('index', { title: 'Lista de Livros', books: response.data });
  } catch (error) {
    next(error);
  }
});

// Página de detalhe do livro
router.get('/:id', async (req, res, next) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/books/${req.params.id}`);
    res.render('book', { title: 'Detalhe do Livro', book: response.data });
  } catch (error) {
    next(error);
  }
});

// Página de detalhe do autor
router.get('/authors/:idAutor', async (req, res, next) => {
  try {
    const author = req.params.idAutor;
    const response = await axios.get(`${apiBaseUrl}/books`);
    const books = response.data.filter(book => book.author.includes(author));
    const totalBooks = books.length;
    res.render('author', { title: `Detalhe do Autor`, author, books, totalBooks });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

