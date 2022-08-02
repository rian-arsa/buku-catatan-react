import React from 'react';
import { createRoot } from 'react-dom/client';
import CardApp from './components/CardApp'


// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<CardApp/>);