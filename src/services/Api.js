import { useEffect } from "react";

const callToApi = (setData) => {
  return fetch(" https://awesome-profile-cards.herokuapp.com/card")
    .then((response) => response.json())
    .then((response) => {
      setData(response);
    });
};

export default callToApi;
