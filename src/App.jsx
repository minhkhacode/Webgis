import React from 'react';
import Map from './pages/Map.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from './pages/Chart.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Map />} />
                <Route path="/chart" element={<Chart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
