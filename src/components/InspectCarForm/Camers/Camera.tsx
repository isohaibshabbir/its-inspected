import React, { useRef, useState } from "react";

interface CameraAppProps {
  onCapture: (image: string) => void;
}

const CameraApp: React.FC<CameraAppProps> = ({ onCapture }) => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [snapshots, setSnapshots] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const startCamera = async (): Promise<void> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsCameraActive(true);
      }
    } catch (error) {
      console.error("Error starting camera:", error);
    }
  };

  const stopCamera = (): void => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraActive(false);
    }
  };

  const takeSnapshot = (): void => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        const snapshot = canvasRef.current.toDataURL("image/png");
        setSnapshots((prevSnapshots) => [...prevSnapshots, snapshot]);

        // Store the latest snapshot in formData
        onCapture(snapshot);
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={startCamera} disabled={isCameraActive}>Start Camera</button>
      <button onClick={stopCamera} disabled={!isCameraActive}>Stop Camera</button>
      <button onClick={takeSnapshot} disabled={!isCameraActive}>Capture Image</button>

      <div>
        <video ref={videoRef} style={{ width: "640px", height: "480px", marginTop: "20px" }}></video>
      </div>
      <canvas ref={canvasRef} width={640} height={480} style={{ display: "none" }}></canvas>

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        overflowX: "auto",
        border: "1px solid #ccc",
        padding: "10px",
        gap: "10px",
      }}>
        {snapshots.map((snapshot, index) => (
          <img key={index} src={snapshot} alt={`Snapshot ${index + 1}`}
            style={{ width: "100px", height: "auto", border: "1px solid #ccc", borderRadius: "5px" }} />
        ))}
      </div>
    </div>
  );
};

export default CameraApp;
