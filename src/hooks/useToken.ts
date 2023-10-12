import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwtdecode from "jwt-decode";
import { clearTokenAfterLogout } from "../redux/slice/authSlice";
import { Dispatch } from "@reduxjs/toolkit";

interface JWTData {
  id: number;
  name: string;
  email: string;
  image: string;
  iat: number;
  exp: number;
}

const initialData: JWTData = {
  id: 0,
  name: "",
  email: "",
  image: "",
  iat: 0,
  exp: 0,
};

const useToken = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [decodedJWT, setDecodedJWT] = useState<JWTData>(initialData);
  const token: any = useSelector((state: any) => state.token);
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      setIsAuth(true);
      const decodedJWT: any = jwtdecode(token);
      setDecodedJWT(decodedJWT);
      if (decodedJWT.exp * 1000 < Date.now()) {
        setIsAuth(false);
        localStorage.removeItem("token");
        dispatch(clearTokenAfterLogout());
        setDecodedJWT(initialData);
      }
    } else {
      setIsAuth(false);
      setDecodedJWT(initialData);
      dispatch(clearTokenAfterLogout());
    }
  }, [token]);

  return {
    isAuth: isAuth,
    data: decodedJWT,
  };
};

export default useToken;
