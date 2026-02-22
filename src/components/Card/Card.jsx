// Card.jsx
import PropTypes from 'prop-types';
import TiltedCard from '../TiltedCard/TiltedCard.tsx';
import { BorderBeam } from '../magicui/border-beam';
import styles from './Card.module.css';

const Card = ({ data, onClick }) => (
  <div 
    onClick={() => onClick(data.path)}
    style={{
      position: 'relative',
      borderRadius: '12px',
      border: '1px solid transparent',
      cursor: 'pointer'
    }}
    className="card-wrapper"
  >
    <TiltedCard
      imageSrc={data.imageSrc}
      altText={data.altText}
      captionText={data.captionText}
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={14}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <p className="descripcion-imagen">{data.description}</p>
      }
    />
    <BorderBeam
      duration={8}
      size={100}
      colorFrom={data.colorFrom}
      colorTo={data.colorTo}
    />
  </div>
);


Card.propTypes = {
  data: PropTypes.shape({
    path: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    captionText: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    colorFrom: PropTypes.string.isRequired,
    colorTo: PropTypes.string.isRequired,
    overlayContent: PropTypes.node
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;