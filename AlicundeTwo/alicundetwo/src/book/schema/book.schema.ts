import { Schema } from 'mongoose';

export const BookSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  chapters: { type: Number, required: true },
  pages: { type: Number, required: true },
});
