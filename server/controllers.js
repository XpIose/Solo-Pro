const models = require('./model');
const controller = {};



controller.getPosts = (req, res, next) => {
    console.log('finding data')
    models.Posts.find({}, (err, doc) => {
        // console.log(doc);
        if (err) return next('getPosts err' + JSON.stringify(err))
    // .then(data => {
        // console.log(data)
        res.locals.posts = doc;
        // console.log(doc)
        return next();
    });
    // .catch(err => console.log(err));
}
// controller.getPosts = 
// models.Post.find({})
//     .then(data => console.log(data))
//     .catch(err)



controller.addPost = (req, res, next) => {

    let input = req.body.input 
    console.log('req.body/input: ', input);
    models.Posts.create(
        {
            // name: name,
            input: input.toString(),
            // likes: like,
            // date: date,
        }
    )
    .then(data => {
        console.log('addPostData', data)
        return next();
    })
    .catch(err => console.log(err))
}


controller.likePost = (req, res, next) => {
    let like;
    console.log(req, res)
    models.Posts.updateOne({

    })
    .then(data => {
        console.log(data)
        return next();
    })
}

module.exports = controller;


// r7Ih8VCuovW5B82w

// mongodb+srv://rylan:r7Ih8VCuovW5B82w@cluster1.0okh8un.mongodb.net/?retryWrites=true&w=majority