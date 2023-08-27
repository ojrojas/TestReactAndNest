import { Schema } from 'mongoose';

export const AuthorSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
});
