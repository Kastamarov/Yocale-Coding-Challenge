import {
  TicketStatuses,
  TicketStatusesEnum,
  TicketWithUserType,
  UserType,
} from "../../utils/types";
import "./Ticket.css";
import { TicketAssignDropdown } from "../index";
import { NavLink } from "react-router-dom";

type TicketType = {
  ticket: TicketWithUserType;
  users: UserType[];
};

const Ticket = ({ ticket, users }: TicketType) => {
  return (
    <div className="ticketContainer">
      <div className="ticketDetails">
        <div className="ticketNumber">
          <b>Ticket number:</b> {ticket.number}
        </div>
        <div className="ticketStatus">
          <b>Ticket status:</b> {ticket.status}
        </div>
        <div className="ticketAssigned">
          {ticket.user ? (
            <>
              <b>Assigned:</b>
              <img
                className="userImage"
                src={ticket.user?.image}
                alt={ticket.user.firstName}
              />
              {ticket.user?.firstName} {ticket.user?.lastName}
            </>
          ) : (
            "Unassigned"
          )}
        </div>
      </div>
      <div className="ticketAction">
        <button
          disabled={ticket.status === TicketStatusesEnum.completed}
          onClick={() => alert("Here will be complete handler")}
        >
          {ticket.status === TicketStatusesEnum.completed
            ? "Completed"
            : "Complete"}
        </button>
        <TicketAssignDropdown
          users={users}
          onChange={() => alert("Here will be re-assign logic")}
          ticketId={ticket.id}
        />
        <NavLink to={`ticket/${ticket.id}`} relative="path">
          <button>Ticket Details</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Ticket;
