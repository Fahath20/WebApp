import logo from './logo.svg';
import './App.css';
import Gallery from './Hooks/gallery';
import PackingList from './Hooks/packing-list';
import Button from './Hooks/button';
import Parent from './Hooks/context';
import Todo from './Hooks/todo';
import Search from './Hooks/search';

function App() {
  return (
    <div>
      <Gallery/>
      <PackingList/>  
      <Button/>
      <Parent/>
      <Todo/>
      <Search/>
    </div>
    
  );
}

export default App;
