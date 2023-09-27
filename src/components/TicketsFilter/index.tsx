import React, { ChangeEvent } from "react";
import { TicketStatuses } from "src/utils/types";

type TicketFilterType = {
  onFilterChange: (filter: string) => void;
};

const TicketFilter = ({ onFilterChange }: TicketFilterType) => {
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(e.target.value);
  };

  return (
    <select onChange={handleFilterChange} defaultValue="">
      <option value="" disabled>
        Filter by status
      </option>
      {TicketStatuses.map((status, index) => (
        <option key={index} value={status.value}>
          {status.name}
        </option>
      ))}
    </select>
  );
};

export default TicketFilter;
