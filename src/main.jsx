import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tar-memo/Padre';
// import ParentComponentA  from './08-ComponentesFormDinamicos/ParentComponentA'
// import ParentComponentB from './08-ComponentesFormDinamicos/ParentComponentB'

// import ExtendedForm from './08-formheredados/ExtendedForm'
// import ExtendedForm from './08-formheredados/ExtendedForm'
// import './08-useReducer/intro-Reducer'
//import {TodoApp}  from './08-useReducer/TodoApp'

import './index.css'
import { MainApp } from './09-useContext/MainApp';
import { Componente1 } from './08-dataTable/Componente1';
import { Componente2 } from './08-dataTable/Componente2';



let App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainApp />
        <Componente1/>
        <Componente2/>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
