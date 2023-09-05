import { useState,useEffect} from "react";
import { Login } from "./components/Login";
import { MainRouter } from "./routers/MainRouter";

function App() {
  const [token,setToken] = useState(null)

  const handleLogin = (jwt)=>{
    setToken(jwt)
  }

  const handleLogout=()=>{
    localStorage.removeItem('token');
    setToken(null);
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <div className="layout">

      {!token?(
      <Login handleLogin={handleLogin}/>

      ):
      <MainRouter handleLogout={handleLogout} />
      }

    </div>
  );
}

export default App;
