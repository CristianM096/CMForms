import './App.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';

import ShowForms from './components/Form/ShowForms';
import CreateForm from './components/Form/CreateForm'
import EditForm from './components/Form/EditForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShowForms/>}/>
            <Route path='/create' element={<CreateForm/>}/>
            <Route path='/edit/:id' element={<EditForm/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
