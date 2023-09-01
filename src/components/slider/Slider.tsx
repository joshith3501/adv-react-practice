import SliderData from "./SliderData";
import SliderItem from "./SliderItem";
import './slider.css';


const Slider = () => {
  const data = [...SliderData];

  return (
    <section className="elements-container">
      {data.map((item) => {
        return <SliderItem {...item} />;
      })}
    </section>
  );
};

export default Slider;
