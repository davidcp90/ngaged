

const endpoint = "https://flowing-koala-12.hasura.app/api/rest/rsvp";

// Form the request for sending data to the server.
const options = (data: any) => {
  return {
    // The method is POST because we are sending data.
    method: "POST",
    // Tell the server we're sending JSON.
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret":
        "pbvM0a7eaf30pYRs1fHtKHNrxUK8DrYogug8LiQmfGWabpDzjh3h2T1IxexSAVIh",
    },
    // Body of the request is the JSON data we created above.
    body: JSON.stringify(data),
  };
};

export const submitRSVP = (data: any) => fetch(endpoint, options(data));
