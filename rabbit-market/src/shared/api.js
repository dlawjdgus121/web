import axios from 'axios';

const api = axios.create({
  baseURL: 'http://52.79.160.167',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
});

// api.interceptors.request.use(function (config) {
//   const accessToken = document.cookie.split('=')[1];
//   config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
//   return config;
// });

export const apis = {
  // user
  login: (id, pw) => api.post('/api/login', { loginId: id, password: pw }),
  signup: (id, pw, nickname) =>
    api.post('/api/signup', {
      loginId: id,
      password: pw,
      nickname: nickname,
    }),
  checkId: (id) =>
    api.post('/api/checkid', {
      loginId: id,
    }),

  // post
  posts: () => api.get('/api/posts'),
  post: (postId) => api.get(`/api/posts/${postId}`),
  add: (token, title, price, imgurl, content) =>
    api.post('/api/posts', { token, title, price, imgurl, content }),
  image: (file) => api.post('/api/image', { file }),
  edit: (postId, title, price, imgurl, content, token) =>
    api.put(`/api/posts`, {
      postId,
      title,
      price,
      imgurl,
      content,
      token,
    }),
  del: (token, postId) =>
    api.delete(`api/posts`, {
      token,
      postId,
    }),

  // comment
  addComment: (token, postId, comment) =>
    api.post(`/api/comments`, {
      token,
      postId,
      comment,
    }),
  delComment: (token, commentId) =>
    api.delete(`/api/comments`, {
      token,
      commentId,
    }),
  editComment: (token, postId) =>
    api.patch(`/api/status`, {
      token,
      postId,
    }),
};
