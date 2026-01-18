import "./Pixelbot.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import PixelbotLayout from './PixelbotLayout.jsx';
import PixelbotSummaryPage from './PixelbotSummaryPage.jsx';
import PixelbotChildPage from './PixelbotChildPage.jsx';

export default function Pixelbot() {
    return (
        <Routes>
            <Route element={<PixelbotLayout />}>
                <Route path="summary" element={<PixelbotSummaryPage />} />
                <Route path="child" element={<PixelbotChildPage />} />
                <Route index element={<Navigate to="summary" replace />} />
                <Route path="*" element={<Navigate to="/pixelbot" replace />} /> {/* Fallback */}
            </Route>
        </Routes>
    );
}
