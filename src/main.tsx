import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './redux/store'
import { Provider } from 'react-redux'
import { RouterProvider } from "react-router-dom"
import router from './router/Router'
import { QueryClient, QueryClientProvider } from 'react-query'

import './index.css'
import GoToTop from './components/Elements/Button/GoToTop'

//https://preview.colorlib.com/#cozastore

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // refetchOnReconnect:false,
      // retry:false,
      // refetchOnMount:false
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <GoToTop />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
