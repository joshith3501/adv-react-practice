import { useEffect, useState } from 'react';
import Card from './Card';
import './githubapi.css';




const GithubApi = () => {

  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const url = 'https://api.github.com/users';
  useEffect(() => {

    const handleData = async () => {
      try {
        const response = await fetch(url);
        if(!response.ok){
          setIsError(true);
        }
        const user = await response.json();
        setUsers(user);
      } catch {
        setIsError(true);
        console.log('error');
      }
      setIsLoading(false);
    };
    handleData();
  }, [users]);

  const handleReload = () => {
    setUsers([]);
  }

  if(isLoading) {
    return <h1> Loading Users .... </h1>
  }

  if(isError) {
    return <h1>Some error has occured</h1>
  }

  return (
    <>
      <button onClick={handleReload}>Reload</button>
      <section className="main-content">
        {users.map((user) => {
          return (
            <Card
              image={user.avatar_url}
              login={user.login}
              profile={user.html_url}
              key={user.id} />
          );
        })}
      </section>
    </>
  );
}

export default GithubApi