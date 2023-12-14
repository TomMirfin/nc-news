import axios from "axios";

const api = axios.create({
  baseURL: "https://news-server-qoyx.onrender.com",
});
export function GetAllArticles(query) {
  console.log(query);
  return api
    .get(`api/articles?sorted_by=${query}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function GetSingleArticle(id) {
  return api.get(`/api/articles/${id}`).then((response) => {
    console.log(response);
    if (response.status !== 200) {
      console.log(response);
      return Promise.reject({
        status: response.status,
        message: response.message,
      });
    }
    return response;
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

export function voteOnArticles(id, newVote) {
  return api.patch(`/api/articles/${id}`, newVote).then((res) => {
    return res.data.votes;
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
