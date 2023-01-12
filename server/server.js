const path = require('path');
const express = require('express');
const controller = require('./controllers');
const app = express();
// const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.get('/', (req, res) => {
//   return res.status(200).json('hi rylan')
// });

app.use('/dist', express.static(path.join(__dirname, '../dist')));

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
// });

// app.use('/post', './router');

app.get('/',
    controller.getPosts,
    (req, res) => {
        console.log('got db data')
        // console.log(res.locals.posts)
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
    console.log('updating posts...')
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

// module.exports = app;
app.listen(3000);