import "./App.css";
import ContactForm from "./components/ContactForm";
import ReactDOM from "react-dom";
import Title from "./components/Title";
import Idea from "./components/Idea";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

const info = [
  {
    head: "About the Company",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: "fas fa-building",
  },

  {
    head: "Our Values",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: "fas fa-globe-africa",
  },
  {
    head: "Our Values",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: "fas fa-landmark",
  },
];

function App() {
  return (
    <div className="App">
      <Title />

      {info.map((item, i) => {
        if (i % 2 == 0) {
          return <Idea props={item} />;
        } else return <Idea props={item} className="bg-bg-secondary" />;
      })}

      <ContactForm />
    </div>
  );
}

export default App;
