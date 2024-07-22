import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NatalCard from './pages/NatalCard/NatalCard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AboutPage } from './pages/About/About';
import { Header } from './layout/Header/Header';

const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
          retry: false,
          refetchOnWindowFocus: false,
      },
  },
});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/natal-card" Component={NatalCard}></Route>
            <Route path="/about" Component={AboutPage}></Route>
          </Routes>
        </BrowserRouter>
        <div id="modal-root"></div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
