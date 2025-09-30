import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import LifecycleClassComponent from './Component/StateComponent.jsx'
// import App,{SetApp} from './App.jsx'
// import App from './App.jsx' 
import Counter from './Counter.jsx'


createRoot(document.getElementById('root')).render(
  <>
  <Counter/>
  </>
 //<SetApp/>
  //<App/>
  //<Counter/>
 /// <LifecycleClassComponent/>
)
