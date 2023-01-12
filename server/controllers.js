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
    // console.log('reqquery: ',req.query)
    // console.log('id: ', req.body._id)
    const id = req.body._id;
    const update = req.body.likes += 1;
    console.log(update)
    models.Posts.findOneAndUpdate({ _id: id }, { likes: update}, { new: true })
    .then(data => {
        console.log('retured data: ', data)
        return next();
    })   
}

controller.commentPost = (req, res, next) => {
    // console.log('reqquery: ',req.query)
    // console.log('id: ', req.body._id)
    const id = req.body.id._id;
    console.log('IDDD:', id)
    const msg = req.body.msg ;
    const update = {
        $push : {
           comments :  {
                "text": msg,
            } //inserted data is the object to be inserted 
        }
    }
    console.log(update)
    models.Posts.findOneAndUpdate({ _id: id }, update, { new: true })
    .then(data => {
        console.log('retured data: ', data)
        return next();
    })
    .catch(err => {
        console.log('comment err: ', err)
        return next(err)
    })
}

controller.deletePost = (req, res, next) => {
    const id = req.body._id;
    models.Posts.deleteOne({ _id: id })
    .then(data => {
        console.log('deleted data: ', data)
        return next();
    })
    // return next();
}

module.exports = controller;


// r7Ih8VCuovW5B82w

// mongodb+srv://rylan:r7Ih8VCuovW5B82w@cluster1.0okh8un.mongodb.net/?retryWrites=true&w=majority