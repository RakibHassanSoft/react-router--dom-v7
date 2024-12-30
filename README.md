# React router dom
## Starting 
```
Go here (Starting with Library):
https://reactrouter.com/start/library/installation

Run:
npx create-vite@latest
npm i react-router

```
 ## Follow the doc and add 
```
EXAMPLE : 
Add : BrowserRouter


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

```


## Code structure of route
```

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter,Routes,Route  } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ConcertsHome from "./pages/ConcertsHome.jsx";
import City from "./pages/City.jsx";
import Trending from "./pages/Trending.jsx";
import Navbar from "./components/navbar.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="concerts">
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
      </Route>
    </Routes>
</BrowserRouter>
);
```

### Explanation : 
```
1. BrowserRouter
What It Does:
Provides the routing context for your application.
It uses the HTML5 History API (pushState, replaceState) to keep the UI in sync with the URL.
How to Use:
Wrap your application with <BrowserRouter> to enable routing.
Typically used once at the top level of your application.
Example:

jsx
Copy code
<BrowserRouter>
  <App />
</BrowserRouter>
2. Routes
What It Does:
A container for all your routes.
It replaces the older <Switch> component from React Router v5.
Automatically renders only the first matching route.
How to Use:
Place <Routes> inside <BrowserRouter>.
Define multiple <Route> elements as children to declare the routing structure.
Example:

jsx
Copy code
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
3. Route
What It Does:
Defines a single route in the application.
Maps a specific path to a component.
How to Use:
Specify the path prop to indicate the URL path.
Use the element prop to specify the React component to render.
Example:

jsx
Copy code
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />

```
