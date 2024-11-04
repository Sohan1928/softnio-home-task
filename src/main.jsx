import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/routes/Router";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <div className="max-w-[1920px] mx-auto ">
    <HelmetProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </HelmetProvider>
  </div>
);
