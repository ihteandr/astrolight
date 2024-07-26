import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NatalCard from './pages/NatalCard/NatalCard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AboutPage } from './pages/About/About';
import { Header } from './layout/Header/Header';
import { NatalCardForm } from './pages/NatalCardForm/NatalCardForm';

const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
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
            <Route path="/natal-card-form" Component={NatalCardForm}></Route>
            <Route path="/natal-card/:request" Component={NatalCard}></Route>
            <Route path="/about" Component={AboutPage}></Route>
          </Routes>
          <div id="info-modal"></div>
          <div id="modal-root"></div>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
