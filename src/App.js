import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

const initialState = `
  This is a paragraph

  **Bold text**
  
  > Block quote

  # Heading
  ## Heading 2
  ### Heading 3

  - item 
  

  [MarkedJS](https://marked.js.org/)


  This is a inline \`<div></div>\`

  This is a block of code

  \`\`\`
  const a = 2;
  const b = 2;
  let c = a+b;
  \`\`\`


  ![React Logo ](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)
`;

class App extends Component {
  state = {
    text: initialState
  }

handleChange = (e) => {
  this.setState({
    text: e.target.value
  })
}
  render(){
    const { text } = this.state;
    const markdown = marked(text, { breaks:true });
    return (
      <div>
        <h2 className="text-center mt-4">Convert your Markdown</h2>
        <div className = 'row'>
          <div className = 'col-6'>
            <label class="form-label">Enter your markdown:</label>
            <textarea className="form-control rounded p-2" name="" id="editor" cols="30" rows="10" value={ text } onChange={this.handleChange}></textarea>
          </div>
          <div className = 'col-6' >
          <label class="form-label">Result:</label>
          <div className = "preview rounded p-2" dangerouslySetInnerHTML={{__html: markdown}} id="preview"/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
