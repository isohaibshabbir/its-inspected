import React from 'react';
import '../InspectionReport.css';

const Header: React.FC = () => {
  return (
    <header className="report-header">
      <h1>Inspect Intelligently</h1>
      <div className="header-actions">
        {/* <button>Download Report</button>
        <button>Share Report</button> */}
      </div>
    </header>
  );
};

export default Header;