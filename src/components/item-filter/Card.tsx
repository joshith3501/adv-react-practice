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
      <div className="item-description">
        <div className="title-and-price">
          <h2>{title}</h2>
          <small>{price}</small>
        </div>
        <p>{desc}</p>
      </div>
    </article>
  )
}

export default Card