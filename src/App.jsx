import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Map from './pages/Map.jsx';
import Test from './pages/test.jsx';
import Chart from './pages/Chart.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Map />} />
                <Route path="/chart" element={<Chart />} />
                <Route path="/test" element={<Test />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
