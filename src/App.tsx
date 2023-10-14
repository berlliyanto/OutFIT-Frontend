import useToken from "./hooks/useToken";
import HomePage from "./pages/HomePage";

function App() {
  const {isAuth} = useToken();
  return (
    <HomePage isAuth={isAuth} />
  );
}

export default App;
