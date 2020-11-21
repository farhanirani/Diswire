import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function CheckUserLoggedInOrNot() {
  const history = useHistory();
  const token = localStorage.getItem("auth-token");
  const page = window.location.pathname.substring(1);
  console.log(page);
  useEffect(() => {
    (async () => {
      const tokenRes = await axios.post("/api/user/checkToken", null, {
        headers: { "x-auth-token": token },
      });

      // console.log(tokenRes.data);
      if (!tokenRes.data && page !== "login" && page !== "reg") {
        history.push("/hello");
      }
    })();
  }, []);

  return <></>;
}

export default CheckUserLoggedInOrNot;
