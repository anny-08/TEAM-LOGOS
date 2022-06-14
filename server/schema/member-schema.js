import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const memberSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
})

autoIncrement.initialize(mongoose.connection);
memberSchema.plugin(autoIncrement.plugin, 'member');

const member = mongoose.model('member', memberSchema);

export default member;