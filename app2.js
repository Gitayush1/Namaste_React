import React from "react";
import ReactDOM from "react-dom/client"
/* 

<div id="parent">
  <div id=child>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id=child2>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>

ReactElement(Object) => HTML(Browser Understands)

*/


const parent = React.createElement('div',{id : 'parent'},[
    React.createElement('div',{id : 'child'},[
        React.createElement('h1',{},"I'm H1 Tag"),
        React.createElement('h2',{},"I'm H2 Tag")
    ])
], React.createElement('div',{id : 'child2'},[
        React.createElement('h1',{},"I'm H1 Tag"),
        React.createElement('h2',{},"I'm H2 Tag")
])
);
const root2 = ReactDOM.createRoot(document.getElementById('root2'))
root2.render(parent)

console.log(parent);