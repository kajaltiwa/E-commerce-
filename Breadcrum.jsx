import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrum({ title }) {
  return (
    <>
   
      <section id="hero" className="my-5 bg-primary">
        <div clasclassName="container">
          <ol class="breadcrumb">
             <li class="breadcrumb-item"><Link to="/" className='text-light'>Home</Link></li>
             <li class="breadcrumb-item text-light" aria-current="page">{title}</li>
          </ol>
        </div>
      </section>
    </>
  );
}
