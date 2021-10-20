const callToApi = (data) => {
  return fetch("/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log("Error:", error));
};

export default callToApi;
