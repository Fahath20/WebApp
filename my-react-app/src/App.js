import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery/gallery';
import PackingList from './PackingList/packing-list';
import Button from './Button/button';
import Parent from './Context/context';
import Todo from './Todo/todo';

function App() {
  return (
    <div>
      <Gallery/>
      <PackingList/>  
      <Button/>
      <Parent/>
      <Todo/>
    </div>
    
  );
}

export default App;
