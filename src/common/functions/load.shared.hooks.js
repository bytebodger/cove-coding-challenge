import { use } from "../objects/use";
import { useReservationsEndpoint } from "../hooks/use.reservations.endpoint";

export const loadSharedHooks = () => {
  use.reservationsEndpoint = useReservationsEndpoint();
};
