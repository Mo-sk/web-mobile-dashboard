import * as React from 'react';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from './pages/Home';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth'
import Navbar from './components/Navbar/Navbar';

function App() {
  const [user, setUser] = React.useState(null);
  const [authState, setAuthState] = React.useState(null)

  React.useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth,
      async authenticatedUser => {
        if(authenticatedUser) {
          setUser(authenticatedUser.email)
          setAuthState('home');
        } else {
          setUser(null);
          setAuthState('login')
        }
      })

      return unSubscribeAuth;
  }, [user])

  // if(authState === 'login') return <Login setAuthState={setAuthState} setUser={setUser}/>
  // if(authState === 'register') return <Register setAuthState={setAuthState} setUser={setUser}/> 
  // if(user) return <Home user={user} setAuthState={setAuthState} setUser={setUser}/>

  if (!user && authState === 'login') {
    return <div><Login setAuthState={setAuthState} setUser={setUser}/></div>
  } else if (!user && authState === 'register') {
    return <div><Register setAuthState={setAuthState} setUser={setUser}/></div> 
  } else {
    return <div><Navbar/><Home user={user} setAuthState={setAuthState} setUser={setUser}/></div>
  }
}

export default App;
