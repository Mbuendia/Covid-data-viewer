import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { StoreProvider } from "./context/store/storeContext";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import * as serviceWorker from "./serviceWorker";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<>

  <StoreProvider>
    <App />
  </StoreProvider>
</>);

serviceWorker.unregister();
