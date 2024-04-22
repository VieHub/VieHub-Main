import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import AuthProvider from "./hooks/AuthProvider.tsx";
import { store } from './store/store.tsx';
import { Provider } from 'react-redux';

// export const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: Infinity,
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  <Provider store={store}>
      <App />
      </Provider>,

  </React.StrictMode>,
);
