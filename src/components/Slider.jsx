import Carousel from 'react-bootstrap/Carousel';
import { Arays } from './Arays';

function Slider() {
  return (
    <>
        <Carousel >
    {Arays.map((usuario, index)=>(
        <Carousel.Item key={index + 1}>
          <img src={usuario.img} alt='imgslider' className='ImgSlider' />
          <Carousel.Caption>
            <h3 className='nombres'>{usuario.id + 1}</h3>
            <p className='nombres'>{usuario.name}</p>
          </Carousel.Caption>
        </Carousel.Item>
    ))}
    </Carousel>
    </>
  );
}

export default Slider;