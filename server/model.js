const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
const MONGO_PASS = process.env.MONGO_PASS;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'solopro'
})
.then(() => console.log('connected to db'))
.catch(err => console.log(err))

const Schema = mongoose.Schema;

const userSchema = new Schema({
    user: { type: String, required: true, unique: true},
    pass: { type: String, required: true},
    email: { type: String, required: true},
})
const Users = mongoose.model('user', userSchema);


const postsSchema = new Schema({
    name: { 
        // type: Schema.Types.ObjectId, 
        // ref: 'user',
        type: String,
        default: 'Rylan', 
        required: true,
    }, //username after demo
    input: { type: String, required: true },
    likes: { type: Number, default: 0 },
    date: { type: Date, default: Date.now},
    comments: [{
        name: { type: String, default: 'Rylan' }, //username after demo
        text: { type: String, required: true },
    }]
})
const Posts = mongoose.model('posts', postsSchema);

//depricated comments code
const commentsSchema = new Schema({
    name: String,
    input: String,
    likes: Number,
    date: String,
})
const Comments = mongoose.model('comments', commentsSchema);

module.exports = {
    Posts, 
    Comments
};
