import React from 'react';
import PropTypes from 'prop-types';
import CircularGallery from '../CircularGallery/CircularGallery'; // Este es el componente de la galería circular

const Circular = ({ data, onClick }) => {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
      {/* Aquí usamos CircularGallery */}
      <CircularGallery
        bend={3}
        textColor="#ffffff"
        borderRadius={0.05}
      />

      {/* Si quieres mostrar información adicional o algún tipo de borde o decoraciones, puedes agregar más contenido aquí. */}
    </div>
  );
};

Circular.propTypes = {
  data: PropTypes.array.isRequired,  // Asegúrate de que los datos sean un arreglo
  onClick: PropTypes.func.isRequired,  // El manejador de clics
};

export default Circular;
