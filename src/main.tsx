import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HashRouter, Route, Routes} from "react-router";
import Product from "./Product.tsx";
import Cart from "./Cart.tsx";
import NavBar from "./NavBar.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HashRouter>
          <Routes>
              <Route path="/" element={<NavBar />}>
                  <Route index element={<App />} />
                  <Route path="/Product" element={<Product />} />
                  <Route path="/Cart" element={<Cart />} />
              </Route>
          </Routes>
      </HashRouter>

  </StrictMode>,
)
