import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Report from './components/Report/Report';
import InspectionForm from './components/InspectionForm/InspectionForm';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Router basename="/its-inspected">
      <Routes>
        <Route path="/" element={<InspectionForm />} />
        <Route path="/report" element={<Report />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);