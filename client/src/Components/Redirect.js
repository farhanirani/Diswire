import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Redirect() {
  const history = useHistory();
  useEffect(() => {
    history.push("/channels/@me");
  });
  return <div></div>;
}

export default Redirect;
