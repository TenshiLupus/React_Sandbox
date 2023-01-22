import React, { StrictMode } from "react";
import {createRoot} from 'react-dom/client'
import App from "./components/App"

const rContainer = document.getElementById("app")
const root = createRoot(rContainer) 

root.render(
<App/> 
);