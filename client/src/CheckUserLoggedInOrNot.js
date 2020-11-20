import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function CheckUserLoggedInOrNot() {
  const history = useHistory();
  const token = localStorage.getItem("auth-token");

  useEffect(() => {
    (async () => {
      const tokenRes = await axios.post("/api/user/checkToken", null, {
        headers: { "x-auth-token": token },
      });

      // console.log(tokenRes.data);
      if (!tokenRes.data) {
        history.push("/login");
      }
    })();
  }, []);

  return <></>;
}

export default CheckUserLoggedInOrNot;
