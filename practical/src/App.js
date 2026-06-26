import { useState } from "react";
import ClassComponent from "./ClassComponent";
import ConditionalComponent from "./ConditionalComponent";
import Eventhandling from "./EventHandling";
import FormComponent from "./FormComponent";
import FunctionalComponent from "./FunctionalComponent";
import Hello from "./Hello";
import JSXExample from "./JSXExample";
import LifecycleComponent from "./LifecycleComponent ";
import ListComponent from "./ListComponent";
import Props from "./Props";
import State from "./State";
import Usestate from "./Usestate";
import Useeffect from "./Useeffect";
import UseSelector from "./UseSelector";
import Useref from "./Useref";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import EmpRTKComponent from "./EmpRTKComponent";
import UserRedux from "./UserRedux";

function App() {
    const [show, setShow] = useState(true);

  return (
    <div>
     {/* <Hello />
     <JSXExample />
     <FunctionalComponent name="React"/>
     <ClassComponent />
     <Props name="React" age={24} location="Ahmedabad" />
     <State />
     <Eventhandling />
     <ConditionalComponent />
     <ListComponent />
     <FormComponent />
     <button onClick={() => setShow(!show)}>Toggle Component</button>

      {show && <LifecycleComponent />}
      <Usestate /> */}
      {/* <Useeffect />
      <UseSelector /> */}
      <Useref />

      <BrowserRouter>
      <div>
        <h1>React Router Example</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>

    {/* <EmpRTKComponent /> */}
    <UserRedux />
    </div>
  );
}

export default App;
