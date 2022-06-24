import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <div></div>;
}
