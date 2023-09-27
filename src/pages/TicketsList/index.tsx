import { useEffect, useState } from "react";
import {
  createTicket as createTicketApi,
  getTicketsAndUsers,
} from "src/utils/api";
import { TicketWithUserType, UserType } from "src/utils/types";
import { Ticket, TicketFilter } from "src/components";
import { addUsersToTickets } from "src/utils/utils";

const TicketsList = () => {
  const [tickets, setTickets] = useState<TicketWithUserType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>("");

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setLoading(true);
  };

  useEffect(() => {
    const searchQuery = filter
      ? {
          searchQuery: `status=${filter}`,
        }
      : {};

    getTicketsAndUsers(searchQuery)
      .then(([getTickets, getUsers]) => {
        return Promise.all([getTickets.json(), getUsers.json()]);
      })
      .then(([tickets, users]) => {
        const ticketsWithUsers = addUsersToTickets(tickets, users);
        setUsers(users);
        setTickets(ticketsWithUsers);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setTickets, setUsers, setLoading, filter]);

  const createTicket = () => {
    createTicketApi();
  };

  return (
    <div className="ticketsContainer">
      <button onClick={createTicket}>create ticket</button>
      <TicketFilter onFilterChange={handleFilterChange} />
      {loading ? (
        "Loading..."
      ) : (
        <div className="ticketsContainer">
          {tickets.length > 0 ? (
            <div className="">
              {tickets.map((ticket, index) => (
                <Ticket key={index} ticket={ticket} users={users} />
              ))}
            </div>
          ) : (
            "There are no any tickets"
          )}
        </div>
      )}
    </div>
  );
};

export default TicketsList;
