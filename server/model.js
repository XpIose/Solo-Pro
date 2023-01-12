const mongoose = require('mongoose');
// const { post } = require('./router');

// const MONGO_URI = 'mongodb+srv://rylan:r7Ih8VCuovW5B82w@cluster1.0okh8un.mongodb.net/?retryWrites=true&w=majority';
const MONGO_URI = 'mongodb+srv://rylan:r7Ih8VCuovW5B82w@cluster1.0okh8un.mongodb.net/?retryWrites=true&w=majority'
const MONGO_PASS = 'r7Ih8VCuovW5B82w'
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'solopro'
})
.then(() => console.log('connected to db'))
.catch(err => console.log(err))

const Schema = mongoose.Schema;

const postsSchema = new Schema({
    name: { type: String, default: 'username' },
    input: { type: String, required: true },
    likes: { type: Number, default: 0 },
    date: { type: Date, default: Date.now},
    comments_id: {
        type: Schema.Types.ObjectId,
        ref: 'comments'
    }
})

const Posts = mongoose.model('posts', postsSchema);

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
