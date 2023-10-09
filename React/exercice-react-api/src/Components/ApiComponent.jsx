import { useEffect } from "react";

const keyApi = "ECe6i59SQp576NKwGswNmQ==9m6ACddLa5EraK49"
const Api = ({cheetahtotoApp}) => {
  useEffect(() => {
    
    const apiUrl =  'https://api.api-ninjas.com/v1/animals?name='
    const name = "cheetah"
    const options = {
      headers: { "X-Api-Key" : keyApi },
    };

    fetch(apiUrl + name, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`erreur de type ${response.status}`);
        } else {
          return response.json()
        }
      })
      .then((data) => {
       cheetahtotoApp(data)
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
};

export default Api;
