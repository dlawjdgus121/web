require('dotenv').config();
const express = require('express');
const connect = require('./models');
const cors = require('cors');
const port = 3001;
const app = express();
const commentsRouter = require('./routes/comment');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
connect();

//body 읽기
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// 여러 라우터를 사용할 경우 배열 형태로 배치
app.use(
    '/api',
    [postRouter, commentsRouter, userRouter] /* [goodRouter,userRouter] 이런식으로 쓸수도*/
);

app.get('/', async (req, res) => {
    //await user.create({ userId: 'test', password: 'test', nickname: 'test' });
    res.send('Hello World');
});
app.listen(port, () => {
    console.log('running on port', port);
});
