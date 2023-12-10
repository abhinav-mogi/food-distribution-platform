import NavigationBar from './NavigationBar/NavigationBar'
import Footer from './Footer/Footer'
import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <NavigationBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default RootLayout;
