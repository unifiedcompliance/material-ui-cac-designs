import app from "../utils/axios";
import axios from "axios";

export function country() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://grcschema.p.rapidapi.com/Country", {
        params: { sort_dir: "0,1" },
        headers: {
          "x-rapidapi-key":
            "b483e1610emsh91e0bc16a8a3d45p1c2c69jsnd014daeb48bf",
          "x-rapidapi-host": "grcschema.p.rapidapi.com",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          resolve(response?.data);
        }
        reject(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function state() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://grcschema.p.rapidapi.com/State", {
        headers: {
          "x-rapidapi-key":
            "b483e1610emsh91e0bc16a8a3d45p1c2c69jsnd014daeb48bf",
          "x-rapidapi-host": "grcschema.p.rapidapi.com",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          resolve(response?.data);
        }
        reject(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function city() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://grcschema.p.rapidapi.com/City", {
        headers: {
            'x-rapidapi-key': 'b483e1610emsh91e0bc16a8a3d45p1c2c69jsnd014daeb48bf',
            'x-rapidapi-host': 'grcschema.p.rapidapi.com'
        },
      })
      .then((response) => {
        if (response.status === 200) {
          resolve(response?.data);
        }
        reject(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
