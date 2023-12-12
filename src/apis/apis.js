import axios from "axios";
const api = axios.create({
  baseURL: "https://news-server-qoyx.onrender.com",
});
export function GetAllArticles() {
  return api
    .get(`api/articles`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function GetSingleArticle(id) {
  return api
    .get(`/api/articles/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getAllComments(id) {
  return api
    .get(`/api/articles/${id}/comments`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
// export function voteOnArticles(id) {
//   return api
//     .patch(`/api/articles/${id}`, { inc_votes: 1 })
//     .then((res) => {})
//     .catch((err) => {});
// }

export function postOnArticle(id, addNewComment) {
  console.log(addNewComment, "<-- add new comment in api");
  return api
    .post(`/api/articles/${id}/comments`, addNewComment)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}
