import axios from "axios";
import Config from "../constants/Api";

// {
//   "status": "error",
//   "message": "Object Not Found",
//   "rate_limit": {
//       "used": 2,
//       "hourly_quota": 120,
//       "hourly_remaining": 118
//   }
// }

export default async (opts = {}) => {
  try {
    const res = await axios({
      baseURL: Config.baseUrl,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      ...opts
    });
    const { data } = res;
    if (data.status === "error") {
      throw new Error(data.message || "Error");
    } else {
      return data;
    }
  } catch (error) {
    console.log("catch", error);
  }
};
