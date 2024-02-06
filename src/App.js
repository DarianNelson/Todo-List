import React from 'react'
import Header from './components/Header'
import ToDoRowList from './components/ToDoRowList';

function App() {
    return(
        <div className="container AppContainer">
            <Header />
            <ToDoRowList />
        </div>
    )
}

export default App;