<template>
  <q-page padding>
    i am checkout page
    <div>testing the api . . .</div>
  </q-page>
</template>

<script>
import { test_api } from "boot/axios";

var axios = require("axios");
var data = JSON.stringify({
  query: `query GetRootCollections {
  Collections(RootOnly:true) {
    ID
    Name
  }
}`,
  variables: {},
});

var config = {
  method: "post",
  url: "https://api.vogroup.ca/graphql",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

export default {
  name: "Checkout",
  created() {
    // test_api
    //   .post("all-products")
    //   .then((response) => {
    //     console.log(response.data.data.Collections);
    //   })
    //   .catch(() => {
    //     console.log("data not found");
    //   });

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
