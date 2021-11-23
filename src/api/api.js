import axios from "axios";

// https://public-api.tracker.gg/v2/csgo/standard/search

//  let response = axios.get(
//     "https://public-api.tracker.gg/api/v1/{titleSlug}/standard/profile/{platformSlug}/{platformUserIdentifier}",
//     {
//       headers: {
//         "TRN-Api-Key": "7e35b9b7-dde1-4ef6-8fab-647a5d8e9e33"
//       }
//     }
//   )
  
  // populateProfile(response.data.data);



  const instance = axios.create({
      baseURL: "https://public-api.tracker.gg/v2/csgo/standard/",
      headers: {
        "TRN-Api-Key": "7e35b9b7-dde1-4ef6-8fab-647a5d8e9e33"
      }
  });


  export const getDateTRN = {
    getTRN() {
        return (
            instance.get(``)
        )
    }
  }
