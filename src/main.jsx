import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*
Hola equipo de Sutilmind, como podran darse cueta en mi CV, yo no estpy familiarizado con React JS
pero me gusto que me lo mandaran a modo de reto, eh estado el fin de semana leyendo documentacion 
de React como de Tanckstack Query, y aunque me retrase mas, espero vean mis habilidades de aprendizaje y 
adaptacion a para los proyectos, gracias.
*/

//Modulos agregados
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools} from '@tanstack/react-query-devtools'

import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <App />
      <ReactQueryDevtools></ReactQueryDevtools>

    </QueryClientProvider>
  </React.StrictMode>,
)
