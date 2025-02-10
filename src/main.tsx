import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { store } from "./Redux/store.ts";
import { Toaster } from "sonner";



import "./index.css";


createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
   

      <Toaster position="top-right" richColors />
      <div className="overflow-x-hidden">
      <App />

      </div>

    </Provider>
);
