import React from "react";
import Header from "../../components/header";
import Footer from "../../components/home/footer";
import "./style.css";

export default function CreatePost() {
  return (
    <div className='main'>
      <Header />
      <div className='content-create-post'>
        <div className='content-body'></div>
      </div>
      <div className='content-4'>
        <div className='content-body'>
          <Footer />
        </div>
      </div>
    </div>
  );
}
