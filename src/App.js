import './App.css';
import Hello from './Hello'
import Properties2 from './Properties2';
import Properties3 from './Properties3';
import State from './State'
import SetState from './SetState'
import Hello2 from './Hello2';
import Properties from './Properties';
import Hey from './Hey';
import BottomNavigation from './BottomNavigation';
import { Profiler } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import NewFile from './NewFile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hey />} />
          <Route path='/task' element={<Hello2 />} />
        </Routes>
      </BrowserRouter>

      {/* <NewFile/> */}




      {/* <h1>hello world</h1>
      <Hello/> */}

      {/* <Properties
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/May/SBO/V1/V2/V3/vRice_flour__pulses.jpg"
        text="jhfoeaioheafoj"

      />

      <Properties
        text="hey welcome to full stack course"
        image="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
        // img={img.jpg}
        name="charan"
      />
      <Properties
        text="hey welcome "
        image="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
        // img={img.jpg}
        name="ananya"
      /> */}


      {/* //function component
      <Properties2
       price = '$3'
       name = 'geeks'
      />

      //class component
      <Properties3
      value = '$34'
      text = 'best'
      />

      <State/> */}

      {/* <SetState /> */}
      {/* <Hello2/> */}

      {/* <BottomNavigation
       icon={Profiler.jpg}
       text="delivery"
      />

      <BottomNavigation
      icon={icon.jpg}
      text="history"
      />

    <BottomNavigation
      icon={icon.jpg}
      text="Profile"
      /> */}
    </div>

  );
}

export default App;
