// src/componentes/Post.jsx
import React from 'react';
import './Post.css';  // Importa tu archivo CSS personalizado

const Post = ({ title, content }) => {
    return (
        <div className="Post">
            <h2 className="Post-title">{title}</h2>
            <p className="Post-content">{content}</p>
        </div>
    );
};

export default Post;
