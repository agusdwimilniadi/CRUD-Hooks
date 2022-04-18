import React from "react";
import { Link, useParams } from "react-router-dom";

export default function About() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <div className="container text-center mt-5">
        <h1>Ini Halaman About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum
          quasi rerum.
        </p>
        <Link to="/">Back to CRUD</Link>
      </div>
    </div>
  );
}
