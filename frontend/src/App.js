import './App.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';

import ListForms from './components/Form/ListForms';
import CreateForm from './components/Form/CreateForm'
import EditForm from './components/Form/EditForm';
import ShowForm from './components/Form/ShowForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListForms/>}/>
            <Route path='/create' element={<CreateForm/>}/>
            <Route path='/edit/:id' element={<EditForm/>}/>
            <Route path='/show/:id' element={<ShowForm/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
