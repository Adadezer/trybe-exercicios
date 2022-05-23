// models/BookModel.ts

import { model as createModel } from 'mongoose';
import { BookSchema, IBook } from '../schemas/BookSchema';
import { MovieSchema, IMovie } from '../schemas/MovieSchema';

class BookModel {
  /*
    Criamos no construtor um model do Mongoose do tipo IBook, passando pro createModel(model do Mongoose) um nome e o schema de referência.
  */

  constructor(private bookModel = createModel<IBook>('books', BookSchema)) {}

  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookModel.find();
    return books;
  }

  public async createBook(bookData: object): Promise<IBook> {
    const book = await this.bookModel.create(bookData);
    return book;
  }
}

// Para Fixar
class MovieModel {
  constructor(private movieModel = createModel<IMovie>('movies', MovieSchema)) {}

  public async getAll(): Promise<IMovie[]> {
    const movies = await this.movieModel.find();
    return movies;
  }
}

export {
  BookModel,
  MovieModel
}