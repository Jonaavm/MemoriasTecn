import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const InfiniteScrollExample = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // Función para simular la obtención de datos (API)
  const fetchMoreData = async () => {
    if (loading) return; // Evita que cargue más si ya está cargando

    setLoading(true); // Indica que estamos cargando más datos

    // Simula la llamada a la API para obtener más elementos
    const newItems = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          Array.from({ length: 20 }, (_, i) => `Item ${items.length + i + 1}`)
        );
      }, 1000); // Simula un retraso de 1 segundo
    });

    setItems((prevItems) => [...prevItems, ...newItems]);

    // Condición para dejar de cargar más elementos después de 200
    if (items.length + newItems.length >= 200) {
      setHasMore(false); // No hay más elementos para cargar
    }

    setLoading(false); // Desactiva el loading una vez que los datos están listos
  };

  useEffect(() => {
    fetchMoreData(); // Carga los datos cuando el componente se monta
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Infinite Scrolling Example</h2>

      <InfiniteScroll
        dataLength={items.length} // Cuantos elementos hay
        next={fetchMoreData} // Función para cargar más datos
        hasMore={hasMore} // Si hay más datos
        loader={<h4>Loading...</h4>} // Loader mientras carga los datos
        endMessage={<p>No more items to show.</p>} // Mensaje de fin
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              padding: '15px',
              backgroundColor: '#f4f4f9',
              borderRadius: '8px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              fontFamily: 'Arial, sans-serif',
              color: '#333',
              fontSize: '18px',
            }}
          >
            {item}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollExample;
