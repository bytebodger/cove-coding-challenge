import { getAxios } from "../functions/get.axios";
import { the } from "../objects/the";
import { useState } from "react";

export const useReservationsEndpoint = () => {
  const [reservations, setReservations] = useState([]);
  const axios = getAxios();

  const loadReservations = async () => {
    const response = await axios.call(
      the.method.get,
      "https://cove-coding-challenge-api.herokuapp.com/reservations"
    );
    if (response.status === 200) setReservations(response.data);
  };

  return {
    loadReservations,
    reservations,
  };
};
