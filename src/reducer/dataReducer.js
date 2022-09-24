import Cookies from "js-cookie";

export function DataReducer(
  state = Cookies.get("data") ? JSON.parse(Cookies.get("data")) : null,
  action
) {
  switch (action.type) {
    case "GET":
      return action.payload;
    case "REMOVE":
      return null;

    default:
      return state;
  }
}
