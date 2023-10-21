import { useSelector } from "react-redux";
import jwtdecode from "jwt-decode";
import { useEffect, useState } from "react";

const useIdUser = (): number | string | undefined => {
  const [id, setId] = useState(0);
  const token: any = useSelector((state: any) => state.token);
  if (!token) return;

  useEffect(() => {
    const decodedJWT: any = jwtdecode(token);
    setId(decodedJWT.id);
  }, []);
  return id;
};

export default useIdUser;
