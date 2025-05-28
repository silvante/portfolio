import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Home />} />
        <Route index path="/info" element={<Info />} />
        <Route index path="/skills" element={<Skills />} />
        <Route index path="/projects" element={<Projects />} />
        <Route index path="/contacts" element={<Contacts />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
