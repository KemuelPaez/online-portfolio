import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Demos from "./components/Demos";
import Contact from "./components/Contact";

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Demos />
			<Contact />
		</div>
	);
	}

export default App;
