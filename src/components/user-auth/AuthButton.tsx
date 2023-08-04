interface Props {
  value: string;
  user: any;
  onClick: () => void;
}

const AuthButton = ({ value, user, onClick}: Props) => {
  return (
    <>
      {Object.keys(user).length ? (
        <h1>Hello, {user.name}</h1>
      ) : (
        <h1>Please Login</h1>
      )}
      <button onClick={onClick}>{value}</button>
    </>
  );
}

export default AuthButton