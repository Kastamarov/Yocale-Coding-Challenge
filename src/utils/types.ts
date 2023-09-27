export interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  address: string;
  image: string;
}

export interface TicketType {
  id: number;
  userId?: number;
  number: string;
  status: string;
}

export interface TicketWithUserType extends TicketType {
  user?: UserType;
}

export enum TicketStatusesEnum {
  "assigned" = "assigned",
  "completed" = "completed",
  "unassigned" = "unassigned",
}

export const TicketStatuses = [
  {
    name: "Assigned",
    value: TicketStatusesEnum.assigned,
  },
  {
    name: "Completed",
    value: TicketStatusesEnum.completed,
  },
  {
    name: "Unassigned",
    value: TicketStatusesEnum.unassigned,
  },
];
