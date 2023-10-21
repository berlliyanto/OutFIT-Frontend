import useToken from "./hooks/useToken";
import HomePage from "./pages/HomePage";

function App() {
  const {isAuth} = useToken();
  console.log(isAuth);
  return (
    <HomePage isAuth={isAuth} />
  );
}

export default App;
