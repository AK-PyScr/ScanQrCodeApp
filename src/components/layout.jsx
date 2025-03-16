import Navigation from "./Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import QrCodeGenerator from "./QRGenerator/QrCodeGenerate";
import QRCodeScaner from "./QRScaner/QRCodeScaner";
import ScanHistory from "./ScanHistory/ScanHistory"
import GenerateHistory from "./GenerareHistory/GenerareHistory"

export function Layout() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scaner" element={<QRCodeScaner />} />
        <Route path="/scanHistory" element={<ScanHistory />} />
        <Route path="/generateHistory" element={<GenerateHistory />} />
      </Routes>
    </div>
  );
}
