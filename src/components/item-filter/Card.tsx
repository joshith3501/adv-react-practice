interface Props {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
};

const Card = ({id, title, category, price, img, desc}: Props) => {
  return (
    <article className="card-container">
      <img src={img} alt={title} />
      <div>
        <strong>{title}</strong>
        <small>{price}</small>
      </div>
      <p>{desc}</p>
    </article>
  )
}

export default Card