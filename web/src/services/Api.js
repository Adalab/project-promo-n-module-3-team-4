const callToApi = (data) => {
  return fetch('//localhost:3001/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

export default callToApi;

// const postDataFetch = (dataState) => {
//     return fetch(URL, {
//       method: 'POST',
//       body: JSON.stringify(dataState),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         return data;
//       });
//   };
