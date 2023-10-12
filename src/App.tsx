import { Fragment } from "react";
import Header from "./components/Fragments/Header";
import useToken from "./hooks/useToken";
import { useDispatch } from "react-redux";
import { clearTokenAfterLogout } from "./redux/slice/authSlice";

function App() {
  const dispatch = useDispatch();

  const {isAuth} = useToken();
  return (
    <Fragment>
      <Header current="home" />
      <button onClick={() => {dispatch(clearTokenAfterLogout())}}>Logout</button>
      <p>
        {
          isAuth ? 'Authenticated' : 'Not Authenticated'
        }
      </p>
    </Fragment>
  );
}

export default App;
