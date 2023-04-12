// import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./styles.css";
import { marked } from "marked";
export default function App() {
  const [text, setText] = useState(`
   # h1 \

   ## This is a sub-heading...\

   ### And some other cool stuff:\

   Here's some code, \`<div></div>\` , between two backticks. \
   
   \`\`\` 
   // This is a multi-line code:\

   function anotherExample (firstLIne, lastLine) { 
     if(firstLine == "\`\`\`" && lastLine == "\`\`\`"){
       return multiLineCode;
     }
   }
   \`\`\`   
   
   You can also make text **bold**...whoa!

   Or _Italic_.

   Or wait for it ... **_both_**

   And feel free to go crazy ~~crossing stuff out~~.

   ![cat photo](image.jpg)

   This is a link [freeCodeCamp](https://www.freecodecamp.org)

   > Block Quotes!
   
   And if you want to get really crazy, even tables:

    Wild Header | Crazy Header | Another Header?
    ------------ | ------------- | -------------
    Your content can | be here, and it | can be here....
    And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

  `);
  const handleChange = (e) => {
    setText(e.target.value);
  };

  marked.setOptions({
    breaks: true
  });

  return (
    <div className="App">
      <div className="editor-wrapper">
        <div className="editor-tools-tip">
          <p className="title">Editor</p>
        </div>
        <textarea id="editor" value={text} onChange={handleChange}></textarea>
      </div>

      <div className="previewer-wrapper">
        <div className="previwer-tools-tip ">
          <p className="title">Previewer</p>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(text)
          }}
        ></div>
      </div>
    </div>
  );
}
