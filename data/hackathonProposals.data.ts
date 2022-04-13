

const endpoint = "https://flowing-koala-12.hasura.app/api/rest/proposal";
const headers = {
      "Content-Type": "application/json",
      "x-hasura-admin-secret":
        "pbvM0a7eaf30pYRs1fHtKHNrxUK8DrYogug8LiQmfGWabpDzjh3h2T1IxexSAVIh",
    };

export const submitProposal = (data: any) => fetch(endpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
});

export const getProposals = () => fetch(endpoint, {
    method: 'GET',
    headers: headers,
});

