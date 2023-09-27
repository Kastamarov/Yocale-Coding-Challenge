import { TicketType, UserType, TicketWithUserType } from "./types";

export const addUsersToTickets = (
  tickets: TicketType[],
  users: UserType[]
): TicketWithUserType[] => {
  return tickets.map((ticket) => {
    const user = users.find((u) => u.id === ticket.userId);

    return {
      ...ticket,
      user: user,
    };
  });
};
