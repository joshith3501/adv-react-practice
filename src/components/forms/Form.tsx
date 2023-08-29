import { ChangeEvent, FormEvent, useState } from "react";
import "./Form.css";

const Form = () => { 
  const data = [
    {
      id:1,
      username: 'john',
      email: 'john@gmail.com'
    },
    {
      id:2,
      username: 'smilga',
      email: 'smilga@gmail.com'
    }
  ]

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedUsers = [...users, {id:users.length+1, username:name, email: email}];
    setUsers(updatedUsers);
    setName('');
    setEmail('');
  }

  return (
    <>
    <section className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-element">
          <label htmlFor="name-input">Name</label>
          <input
            type="text"
            id="name-input"
            className="form-name-input"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            id="email-input"
            className="form-email-input"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="form-submit">
          Submit
        </button>
      </form>
    </section>
    <article className="users-container">
      
      {users.map(({ id, username, email})=> {
      return (
        <div className='user-container' key={id}>
            <strong>{username}</strong>
            <small>{email}</small>
          </div>
      ) 
      })}
    </article>
    </>
  );
};

export default Form;
