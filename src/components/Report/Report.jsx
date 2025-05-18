import React from 'react';
import Header from './Sections/Header';
import VehicleDetails from './Sections/VehicleDetails';
import ScoresSection from './Sections/ScoresSection';
import VehicleInfo from './Sections/VehicleInfo';
import EngineAndVehicleComponents from './Sections/EngineAndVehicleComponents';
import Rims from './Sections/Rims';
import Tyres from './Sections/Tyres';
import PaintReport from './Sections/PaintReport';
import VehichleSummary from './Sections/VehichleSummary.jsx';
import TermsAndConditions from './Sections/TermsAndConditions.jsx';
import PhotoSection from './Sections/PhotoSection.jsx';
import Separator from './Sections/components/Separator.jsx';
import './InspectionReport.css';

const Report = () => {
  const vehicleInfo = {
    Make: "BMW",
    Model: "Mustang",
    Year: 2022,
    EngineSize: "8-Cylinder",
    MileageKM: 26654,
    FuelType: "Petrol",
    RegionalSpecs: "American",
    Transmission: "Automatic",
    Interior: "Leather",
    VINNumber: "1FA6P8CFXN5112633",
    NumberOfKeys: 2,
    SpareTire: "Available",
  };

  return (
    <div className="report-container">
      <Header />
      <VehicleDetails />
      <Separator />
      <ScoresSection />
      <Separator />
      <VehicleInfo details={vehicleInfo} />
      <Separator />
      <VehichleSummary />
      <Separator />
      <EngineAndVehicleComponents />
      <Separator />
      <EngineAndVehicleComponents />
      <Separator />
      <Rims />
      <Separator style={{ marginTop: '50px' }} />
      <Tyres />
      <Separator style={{ marginTop: '50px' }} />
      <PaintReport />
      <Separator />
      <PhotoSection title={'Photos Of Chassis/Subframe'} />
      <Separator />
      <PhotoSection title={'General Exterior Photos'} />
      <Separator />
      <TermsAndConditions />
    </div>
  );
};

export default Report;