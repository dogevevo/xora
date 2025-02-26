import { StrictMode } from 'react'
import ReactDOM from "react-dom"
import './index.css'
import App from './App.jsx'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

// createRoot(document.getElementById('root')).render(
// ReactDoom.render(<app />, document.getElementById('root'))
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
