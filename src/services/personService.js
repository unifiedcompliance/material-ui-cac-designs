import axios from "axios";

export function prefixName() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://grcschema.p.rapidapi.com/NamePrefix", {
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

export function suffixName() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://grcschema.p.rapidapi.com/NameSuffix", {
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
