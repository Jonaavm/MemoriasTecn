import React, { useState } from 'react';
import './App.css';
import Aurora from './Backgrounds/Aurora/Aurora.tsx';
import InfiniteScroll from 'react-infinite-scroll-component';
import logo from './imagenes/logo.png';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreData = () => {
    setLoading(true);
    setTimeout(() => {
      const newItems = [];
      for (let i = 0; i < 10; i++) {
        newItems.push(`Nota ${(items.length + i + 1)}`);
      }
      setItems([...items, ...newItems]);
      setLoading(false);
      if (items.length >= 100) {
        setHasMore(false);  // Detener cuando lleguemos al límite
      }
    }, 1500);
  };

  return (
    <div className="App">
      {/* Fondo de Aurora */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      {/* Título Inicial */}
      <div className="title-container">
        <h1>Bienvenido a mi Blog de Notas</h1>
      </div>

   
      <img src={logo} className="App-logo" alt="logo" />

      {/* Contenido */}
      <div className="content">
        <InfiniteScroll
          dataLength={items.length}
          next={loadMoreData}
          hasMore={hasMore}
          loader={loading && <h4>Loading...</h4>}
          endMessage={<p>No more notes to load.</p>}
        >
          {items.map((item, index) => (
            <div className="note" key={index}>
              <p>{item}</p>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default App;
