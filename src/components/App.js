import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

function header(){
  return (
       <header>
        <h1>RJ BLOG</h1>
       </header>                
  );
}

function About() {
  return (
    <aside>
      <img src="https://via.placeholder.com/215 Links to an external site." alt="blog logo"></img>
      <p>Love code ,Live code .</p>
    </aside>
  )
}

function Article() {
  return(
    <article>
      <h3>The Ninja Code</h3>
      <small>January 23,2023</small>
      <p> Type simple code but a clear created Reflection.</p>
    </article>
  )
}
export default App;
