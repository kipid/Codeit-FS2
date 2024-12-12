import mongoose, { model, Schema } from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test')
	.then(() => console.log('Connected to MongoDB'))
	.catch((e) => console.error(e));

interface IUser {
	id: string;
	name: string;
	email: string;
	age: number;
}

const userSchema = new Schema<IUser>({
	id: { type: String, required: true },
	name: { type: String, required: true },
	email: { type: String, required: true },
	age: { type: Number, required: true },
});

export const User = model<IUser>('User', userSchema);