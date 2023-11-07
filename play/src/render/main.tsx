import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next';
import App from './App.tsx'
import i18n from './locales/index.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
)
