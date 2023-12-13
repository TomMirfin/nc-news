import axios from "axios";
const api = axios.create({
  baseURL: "https://news-server-qoyx.onrender.com",
});
export function GetAllArticles(query) {
  console.log(query);
  return api
    .get(`api/articles?sort_by=${query}`)
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

export function postOnArticle(id, addNewComment) {
  return api
    .post(`/api/articles/${id}/comments`, addNewComment)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getAllUsers() {
  return api
    .get(`/api/users`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function deleteAComment(id) {
  return api
    .delete(`/api/comments/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getAllTopics() {
  return api
    .get(`/api/topics`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
