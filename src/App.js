import { Fragment,useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import List from './components/List';
import {list} from './data';
// eslint-disable-next-line
function App() {
    const [Category, setCategory] = useState(0);
    const loadCategory = (i) => {
      setCategory(i);
    };
  return (
    <Fragment>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
         <SideMenu loadCategory={loadCategory}/>
          <div className="col-sm">
            <div className="row">
              <List data={list} category={Category}/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
