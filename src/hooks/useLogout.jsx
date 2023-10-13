import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const cookieName = "accessToken";
  const logoutUser = () => {
    setLoading(true);
    setTimeout(() => {
      Cookies.remove(cookieName);
      navigate("/IniciarSesion");
    }, 2000);
  };

  return { logoutUser, loading };
}
