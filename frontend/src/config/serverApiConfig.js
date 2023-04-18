console.log(
  "process env REACT_APP_DEV_REMOTE",
  process.env.REACT_APP_DEV_REMOTE
);

export const API_BASE_URL =
  process.env.NODE_ENV == "production" ||
  process.env.REACT_APP_DEV_REMOTE == "remote"
    ? "https://flutterguide-widgets-api.onrender.com/api/"
    : "https://flutterguide-widgets-api.onrender.com/api/";
export const ACCESS_TOKEN_NAME = "x-auth-token";
