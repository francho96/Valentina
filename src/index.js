
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


import { render } from "react-dom";
import App from "./App";
import Trabajos from './pages/trabajos';
import Contacto from './pages/contacto';
import Enviado from './pages/enviado';

import './index.css';


import index  from './pages/img/index2.png'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="trabajos" element={<Trabajos />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="enviado" element={<Enviado />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);