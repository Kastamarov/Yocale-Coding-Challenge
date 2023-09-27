import "./app.css";
import TicketDetails from "./TicketDetails";
import TicketsList from "./TicketsList";
import { HOME_URL, TICKET_DETAILS_URL } from "src/utils/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export type AppProps = {};

const router = createBrowserRouter([
  {
    path: HOME_URL,
    element: <TicketsList />,
  },
  {
    path: TICKET_DETAILS_URL,
    element: <TicketDetails />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
