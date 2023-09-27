import React, { ChangeEvent } from "react";
import { UserType } from "src/utils/types";

type TicketAssignDropdownType = {
  onChange: (filter: string) => void;
  users: UserType[];
  ticketId: number;
};

const TicketAssignDropdown = ({
  onChange,
  users,
  ticketId,
}: TicketAssignDropdownType) => {
  const handleAssign = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select onChange={handleAssign} defaultValue="">
      <option value="" disabled>
        Reassign
      </option>
      {users.map((user, index) => (
        <option key={index} value={user.id} selected={user.id === ticketId}>
          {`${user.firstName} ${user.lastName}`}
        </option>
      ))}
    </select>
  );
};

export default TicketAssignDropdown;
