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

export function GetAllComments(id) {
  return api
    .get(`/api/articles/${id}/comments`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
export function VoteOnComments(id, voteIncDec) {
  console.log(voteIncDec);
  return api
    .patch(`/api/articles/${id}`, voteIncDec)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
