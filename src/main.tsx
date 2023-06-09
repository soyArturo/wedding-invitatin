import ReactDOM from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>
);
