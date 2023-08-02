import { useState, useEffect } from 'react';
import AuthButton from './AuthButton';
const UserAuth = () => {

  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);

  const clickHandler = () => {
    setAuth(!auth);
  }

  useEffect(() => {
    auth? setUser({name: 'john'}): setUser({});
  }, [auth])


  return (
  <>
    {auth ? <AuthButton value="logout" user={user} onClick={clickHandler}/>: <AuthButton value="login" user={user} onClick={clickHandler}/>}
  </>
  );
  
}

export default UserAuth