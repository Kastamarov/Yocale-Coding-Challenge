const API_URL = "http://localhost:3004/";
const API_ENDPOINTS = {
  GET_ALL_TICKETS: "tickets",
  CREATE_TICKET: "ticket",
  GET_ALL_USERS: "users",
};

type GetTicketsType = {
  searchQuery?: string;
};

export const getTickets = async ({ searchQuery }: GetTicketsType) => {
  const urlFetParams = searchQuery ?? "";
  const result = await fetch(
    `${API_URL}${API_ENDPOINTS.GET_ALL_TICKETS}?${urlFetParams}`
  )
    .then((response) => response.json())
    .then((json) => json);

  return result;
};

export const getUsers = async () => {
  const result = await fetch(`${API_URL}${API_ENDPOINTS.GET_ALL_USERS}`)
    .then((response) => response.json())
    .then((json) => json);

  return result;
};

export async function getTicketsAndUsers({ searchQuery }: GetTicketsType) {
  try {
    const urlGetParams = searchQuery ?? "";
    const getTicketsUrl = `${API_URL}${API_ENDPOINTS.GET_ALL_TICKETS}?${urlGetParams}`;
    const getUsersUrl = `${API_URL}${API_ENDPOINTS.GET_ALL_USERS}`;

    const responses = await Promise.all([
      fetch(getTicketsUrl),
      fetch(getUsersUrl),
    ]);

    if (responses.every((response) => response.ok)) {
      return responses;
    } else {
      throw new Error("One or both requests failed");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createTicket(): Promise<Response> {
  const response = await fetch(`${API_URL}${API_ENDPOINTS.CREATE_TICKET}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  if (!response.ok) {
    alert("Whooops... something went wrong");
    // throw new Error(`Failed to create ticket: ${response.statusText}`);
  }

  return response;
}
