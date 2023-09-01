import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight} from "@fortawesome/free-solid-svg-icons";

interface Props {
  id:number;
  image: string;
  name: string;
  title: string;
  quote: string;
};

// const SliderItem = ({ id, image, name, title, quote}: Props) => {
  const SliderItem = (  {id, image, name, title, quote} : Props) => {

    const selectorClass = `item-box-` + `${id}`;
    return (
      <article className={selectorClass}>
        <div className="person-details">
          <img src={image} alt={name} />
          <span>{name}</span>
          <small>{title}</small>
        </div>
        <div className="quote">
          <p>{quote}</p>
        </div>
        <FontAwesomeIcon icon={ faQuoteRight } className="quote-symbol"/>
      </article>
    )
  };

export default SliderItem