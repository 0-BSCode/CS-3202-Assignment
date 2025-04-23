
import './App.css';
import { MainTab } from './components/MainTab';

function App() {

    return (
        <main className='flex flex-col p-4 pt-8 items-center'>
            <h1 className="text-3xl text-center font-bold">
                CS 3202 String Parser
            </h1>
                <MainTab />
            <section>
                <p>Made by <a href="https://github.com/0-BSCode" className='underline'>0-BSCode</a></p>
            </section>
        </main>
    )
}

export default App
