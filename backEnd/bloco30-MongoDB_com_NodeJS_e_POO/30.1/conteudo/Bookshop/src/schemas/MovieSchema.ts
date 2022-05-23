import { Schema } from 'mongoose';

export interface IMovie {
  title: string,
	releaseYear: number
}

/*
  Uma vez que implementamos a interface Book,
  colocamos ela entre <>, para definir o tipo
  do Schema.
*/

export const MovieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  releaseYear: { type: Number, required: true }
});