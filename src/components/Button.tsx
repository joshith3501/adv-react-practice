interface Props {
  buttonClick: () => void;
}
const Button = ({ buttonClick }: Props) => {
  return (
    <button onClick={buttonClick}>Increase</button>
  )
}

export default Button;