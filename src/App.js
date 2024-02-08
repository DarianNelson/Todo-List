import React from 'react'
import Header from './components/Header'
import ToDoRowList from './components/ToDoRowList';
import InputRow from './components/InputRow';

function App() {
    return(
        <div className="container AppContainer">
            <Header />
            <ToDoRowList />
            <InputRow />
        </div>
    )
}

export default App;