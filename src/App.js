import './App.css';
import TextFrom from './components/textForm';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About Us"/>
      <TextFrom heading="Enter The Text To Analyze"/>
    </>
  );
}

export default App;
