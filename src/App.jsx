import React from 'react';
import Map from './pages/Map.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from './pages/Chart.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Map />} />
                <Route path="/chart" element={<Chart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
