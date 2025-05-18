import React from "react";
import Car from '../../../images/car.png';
import insp from '../../../images/icon-thank-you.svg';


type CarCardProps = {
  imageUrl: string;
  chassisNumber: string;
  date: string;
  time: string;
  inspectorName: string;
  email: string;
  rating: number;
};

const dummyData: CarCardProps = {
  imageUrl: Car,
  chassisNumber: "ABC123456789",
  date: "2025-02-09",
  time: "14:30",
  inspectorName: "John Doe",
  email: "john.doe@example.com",
  rating: 9.0,
};

const styles: { [key: string]: React.CSSProperties } = {
  carCardContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  carImage: {
    width: "100%",
    height: "auto",
    maxHeight:'300px',
    borderRadius: "8px",
    objectFit: "cover",
    backgroundColor: "#e0e0e0",
  },
  carDetails: {
    flex: "3",
    padding: "0 20px",
  },
  leftSection: {
    flex: "2  ",
    justifyItems: "left",
  },
  rightSection: {
    flex: "1",
    justifyItems: "right"
  },
  detailTitle: {
    fontSize: "15px",
    color: "#888",
    fontWeight: "bold",
  },
  detailText: {
    fontSize: "15px",
    color: "#333",
    fontWeight: "bold",
    margin: '5px',
  },
  emailText: {
    fontSize: "16px",
    color: "#666D6E",
    fontWeight: "normal",
  },
  vehicleTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  inspectorInfo: {
    marginTop: "12px",
    border: "1px solid #E9EBEB",
    borderRadius: "8px",
    padding: "6px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: 'column',
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  inspectorDetails: {
    display: 'flex',
    alignItems: "center",

  },
  inspectorImage: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "10px",
    backgroundColor: "#e0e0e0",
  },
  ratingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "225px",
    height: "225px",
    position: "relative",
  },
  ratingCircleOuter: {
    width: "92%",
    height: "92%",
    borderRadius: "50%",
    border: "5px solid #e6e6e6",
    position: "absolute",
  },
  ratingSvg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    transform: "rotate(-90deg)",
  },
  ratingTextContainer: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    color: "#333",
  },
  ratingText: {
    fontSize: "18px",
    marginBottom: "4px",
  },
  ratingNumber: {
    fontSize: "42px",
    fontWeight: "bold",
  },
  textContainer: {
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    gap: '15px'
  }
};

function ratingCircleProgress(rating: number): { [key: string]: any } {
  const circumference = 2 * Math.PI * 140;
  const offset = circumference * (1 - rating / 10);
  let strokeColor = rating >= 8 ? "#46C360" : rating >= 5 ? "#FFB144" : "#FF4D4D";
  return {
    strokeDasharray: circumference,
    strokeDashoffset: offset,
    transition: "stroke-dashoffset 0.5s ease-in-out",
    strokeLinecap: "round",
    strokeWidth: "20px",
    stroke: strokeColor,
  };
};

const CarCard: React.FC = () => {
  return <CarCardComponent {...dummyData} />;
};

const CarCardComponent: React.FC<CarCardProps> = ({ imageUrl, chassisNumber, date, time, inspectorName, email, rating }) => {
  return (
    <div style={styles.carCardContainer}>
      <div style={styles.leftSection}>
        <CarImage imageUrl={imageUrl} />
      </div>
      <div style={styles.carDetails}>
        <h2 style={styles.vehicleTitle}>2021 BMW 2 Series</h2>
        <CarDetails chassisNumber={chassisNumber} date={date} time={time} />
        <InspectorInfo inspectorName={inspectorName} email={email} />
      </div>
      <div style={styles.rightSection}>
        <RatingCircle rating={rating} />
      </div>
    </div>
  );
};

const CarImage: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Car" style={styles.carImage} />;
};

const CarDetails: React.FC<{ chassisNumber: string; date: string; time: string }> = ({ chassisNumber, date, time }) => {
  return (
    <div>

      <div style={styles.textContainer}>
        <h2 style={styles.detailTitle}>Chassis Number:</h2>
        <p style={styles.detailText}>{chassisNumber}</p>
      </div>
      <div style={styles.textContainer}>

        <div style={styles.textContainer}>
          <h2 style={styles.detailTitle}>Date:</h2>
          <p style={styles.detailText}>{date}</p>
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.detailTitle}>Time:</h2>
          <p style={styles.detailText}>{time}</p>
        </div>
      </div>
    </div>
  );
};

const InspectorInfo: React.FC<{ inspectorName: string; email: string }> = ({ inspectorName, email }) => {
  return (
    <div style={styles.inspectorInfo}>
      <h2 style={styles.detailTitle}>Inspected by:</h2>
      <div style={styles.inspectorDetails}>
        <img src={insp} alt="Inspector" style={styles.inspectorImage} />
        <div>
          <p style={styles.detailText}>{inspectorName}</p>
          <p style={styles.emailText}>{email}</p>
        </div>
      </div>
    </div>
  );
};

const RatingCircle: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div style={styles.ratingContainer}>
      <div style={styles.ratingCircleOuter}></div>
      <svg style={styles.ratingSvg} viewBox="0 0 300 300">
        <circle cx="150" cy="150" r="140" fill="none" style={ratingCircleProgress(rating)} />
      </svg>
      <div style={styles.ratingTextContainer}>
        <p style={styles.ratingText}>Overall Rating</p>
        <p style={styles.ratingNumber}>{rating}/10</p>
      </div>
    </div>
  );
};

export default CarCard;
