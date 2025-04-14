'use strict';

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, equired: true, unique: true },
});

export default mongoose.model('User', userSchema);