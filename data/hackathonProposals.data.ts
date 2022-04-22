

const proposalEndpoint = "https://flowing-koala-12.hasura.app/api/rest/proposal";
const votingEndpoint = "https://flowing-koala-12.hasura.app/api/rest/vote";
const headers = {
      "Content-Type": "application/json",
      "x-hasura-admin-secret":
        "pbvM0a7eaf30pYRs1fHtKHNrxUK8DrYogug8LiQmfGWabpDzjh3h2T1IxexSAVIh",
    };

export const submitProposal = (data: any) => fetch(proposalEndpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
});

export const applyToProposal = (data: any) => fetch(votingEndpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
});

export const claimProposal = (id:number, data: any) => fetch(`${proposalEndpoint}/${id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(data),
});

export const getProposals = () => fetch(proposalEndpoint, {
    method: 'GET',
    headers: headers,
});

