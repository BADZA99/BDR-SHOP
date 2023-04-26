import { Fragment,useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import List from './components/List';
import {list} from './data';
// eslint-disable-next-line
function App() {
    const [Category, setCategory] = useState(0);
    const [isFiltering, setFiltering] = useState(false);
    const [Filtered, setFiltered] = useState(false);
    const [count, setcount] = useState(1);
    const loadCategory = (i) => {
      setCategory(i);
    };

    const filterResult= (input) =>{
      let fullList=list.flat()
      // console.log(fullList);
      let results=fullList.filter(item =>{
        const name=item.name.toLowerCase();
        const term=input.toLowerCase();
        return name.indexOf(term) > -1
      });
      setFiltered(results);
    }

    useEffect (()=>{
      console.log(isFiltering);
    })

  return (
    <Fragment>
      <Navbar filter={filterResult} setFiltering={setFiltering} count={count} />
      <div className="container mt-5">
        <div className="row">
         <SideMenu loadCategory={loadCategory}/>
          <div className="col-sm">
            <div className="row">
              <List data={ isFiltering ? Filtered : list[Category]} category={Category} addToCart={setcount} count={count}/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
