const path = require('path');
const express = require('express');
const controller = require('./controllers');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/get',
    controller.getPosts,
    (req, res) => {
        console.log('got db data')
        res.status(200).json(res.locals.posts)
});

app.post('/post',
  controller.addPost,
  (req, res) => {
    console.log('updating posts...')
    res.status(200).json(res.locals.posts)
});

app.post('/like',
  controller.likePost,
  (req, res) => {
    console.log('updating likes...')
    res.status(200).json(res.locals.posts)
});

app.post('/comment',
  controller.commentPost,
  (req, res) => {
    console.log('updating comments...')
    res.status(200).json(res.locals.posts)
});

app.delete('/delete',
controller.deletePost,
(req, res) => {
  console.log('deleting post...')
  res.status(200).json(res.locals.posts)
});

// app.use('/', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, '../index.html'))
// })

app.use((req, res) => res.status(200).send('page not found'));

//err
app.use((err, req, res, next) => {
    const defaultErr = 
      {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred, global handler' }, 
      }
    const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log)
  res.status(errorObj.status).send(JSON.stringify(errorObj.message))
    })

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
module.exports = app;