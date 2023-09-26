import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18next from "i18next";
import global_en from "./translations/en/global.json";
import global_ar from "./translations/ar/global.json";
import global_es from "./translations/es/global.json";
import global_fr from "./translations/fr/global.json";
import global_in from "./translations/in/global.json";
import global_zh from "./translations/zh/global.json";
import { I18nextProvider } from 'react-i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    ar: {
      global: global_ar
    },
    es: {
      global: global_es
    },
    fr: {
      global: global_fr
    },
    in: {
      global: global_in
    },
    zh: {
      global: global_zh
    },

  }
});

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
