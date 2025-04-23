import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import ClickSpark from './components/ui/clickspark'
import App from './App'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
    <React.StrictMode>
        <ClickSpark
  sparkColor='#000'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
<App/>
</ClickSpark>
    </React.StrictMode>
)
