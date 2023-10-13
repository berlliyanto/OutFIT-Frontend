import { Fragment } from "react";
import Header from "./components/Fragments/Navigations/Header";
import useToken from "./hooks/useToken";

function App() {
  const {isAuth} = useToken();
  return (
    <Fragment>
      <Header current="home" />
      <p>
        {
          isAuth ? 'Authenticated' : 'Not Authenticated'
        }
      </p>
    </Fragment>
  );
}

export default App;
