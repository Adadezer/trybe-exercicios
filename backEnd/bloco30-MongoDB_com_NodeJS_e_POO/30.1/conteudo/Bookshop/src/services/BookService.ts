// src/services/BookService.ts

import { BookModel, MovieModel } from '../models/BookModel';
import { IBook } from '../schemas/BookSchema';
import { IMovie } from '../schemas/MovieSchema';

class BookService {
  constructor(private bookModel = new BookModel()) {}

  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookModel.getBooks();
    return books;
  }

  public async createBook(bookData: object): Promise<IBook> {
    const book = await this.bookModel.createBook(bookData);
    return book;
  }

  public async getBook(id: string): Promise<IBook | null> {
    const data = await this.bookModel.getBook(id);
    return data;
  }

  public async updateBook(id: string, bookData: object): Promise<IBook | null> {
    const data = await this.bookModel.editBook(id, bookData);
    return data;
  }

  public async deleteBook(id: string): Promise<IBook | null> {
    const data = await this.bookModel.deleteBook(id);
    return data;
  }
}

// Para Fixar
class MovieService {
  constructor( private movieModel = new MovieModel()) {}

    public async getAll(): Promise<IMovie[]> {
    const movies = await this.movieModel.getAll();
    return movies;
  }
}

export {
  BookService,
  MovieService
};