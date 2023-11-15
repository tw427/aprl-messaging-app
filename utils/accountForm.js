import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sessionGetUser } from "./sessionStorage";

export function useLoginNavigate(setUser) {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("username")) {
      const { id, username } = sessionGetUser();
      setUser({ id: id, username: username });
      navigate("/home");
    }
  }, [setUser, navigate]);
}
