import { useEffect, useState } from 'react';
import Card from './Card';
import './githubapi.css';




const GithubApi = () => {

  const [users, setUsers] = useState<any[]>([]);

  const url = 'https://api.github.com/users';
  useEffect(() => {

    const handleData = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUsers(user);
      } catch {
        console.log('error');
      }
    };
    handleData();
  }, [{}]);

  return (
    <>
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