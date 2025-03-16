import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import QrCodeGenerator from "./components/QRGenerator/QrCodeGenerate";
import QRCodeScaner from "./components/QRScaner/QRCodeScaner";
import { Layout } from "./components/layout";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
