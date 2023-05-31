import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistStore, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "components/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={PersistStore}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
);