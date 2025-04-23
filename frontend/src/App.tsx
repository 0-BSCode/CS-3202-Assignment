import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import {Greet, Reverse, CheckString} from "../wailsjs/go/main/App";
import { Button } from './components/ui/button';
import { TabsDemo } from './components/Maintab';

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    function reverse() {
        Reverse(name).then(updateResultText);
    }

    function checkString() {
        CheckString(name).then(updateResultText)
    }

    return (
        <main className='flex flex-col p-4 pt-8 items-center'>
            <h1 className="text-3xl text-center font-bold">
                CS 3202 String Parser
            </h1>
                <TabsDemo />
            <section>
                <p>Made by <a href="https://github.com/0-BSCode" className='underline'>0-BSCode</a></p>
            </section>
        </main>
    )
}

export default App
