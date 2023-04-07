import './App.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';

import ShowForms from './components/Form/ShowForms';
import CreateForm from './components/Form/CreateForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShowForms/>}/>
            <Route path='/create' element={<CreateForm/>}/>
            <Route></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
