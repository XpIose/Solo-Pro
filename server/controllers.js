const models = require('./model');
const controller = {};



controller.getPosts = (req, res, next) => {
    console.log('finding data')
    models.Posts.find({}, (err, doc) => {
        if (err) return next('getPosts err' + JSON.stringify(err))
        res.locals.posts = doc;
        return next();
    });
}

controller.createUser = (req, res, next) => {
    console.log('creating user');
    models.User.create()
    .then(data => console.log('data: ', data))
    .catch(err => console.log(err))
};

controller.addPost = (req, res, next) => {

    let input = req.body.input 
    // console.log('req.body/input: ', input);
    models.Posts.create(
        {
            input: input.toString(),
        }
    )
    .then(data => {
        // console.log('addPostData', data)
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
        // console.log('retured data: ', data)
        return next();
    })   
}

controller.commentPost = (req, res, next) => {
    // console.log('reqquery: ',req.query)
    // console.log('id: ', req.body._id)
    const id = req.body.id._id;
    // console.log('The id is:', id)
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
    });
}

module.exports = controller;