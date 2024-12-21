import React,{useState, useEffect} from 'react'
import Editor from './Components/Editor'
import UseLocalStorage from './Hooks/UseLocalStorage'

const App = () => {
    const [html, setHTML] = UseLocalStorage('html','')
    const [css, setCss] = UseLocalStorage('css','')
    const [js, setJS] = UseLocalStorage('js','')
    const [srcDoc,setSrcDoc] = UseLocalStorage('')
// codepin functionality
    // useEffect(() =>{
    //  const timeOut = setTimeout(() =>{
    //    setSrcDoc(
    //     `
    // <html>
    // <body>${html}</body>
    // <style>${css}</style>
    // <script>${js}</script>
    // </html>
    // `
    //    )
    //   }, 250)

    //   return  () => clearTimeout(timeOut)
    // },[html,css,js])
     const Runcode =()=> {
      setSrcDoc(
        `<html>
     <body>${html}</body>
     <style>${css}</style>
     <script>${js}</script>
     </html>
        `
      )
       
     }

    
    
  return (
   <>
   <div className='pane top-pane'>
    <Editor
    language="xml"
    displayName = "Html"
    value={html}
    onchange={setHTML}
    />
    <Editor
    language="css"
    displayName = "Css"
    value={css}
    onchange={setCss}
    />
    <Editor
    language="javascript"
    displayName = "Js"
    value={js}
    onchange={setJS}
    />
   </div>
   <div style={{ textAlign: 'center', margin: '10px 0' }}>
    <button onClick={Runcode} style={{ padding: '10px 20px', fontSize: '16px' }} >Run</button>
   </div>
   
   <div className='pane'> 
    <iframe 
    srcDoc={srcDoc}
     title='output'
     sandbox='allow-scripts'
     frameBorder={"0"}
     width={"100%"}
    height={"100%"}

    /> 
    </div>
   </>
  )
}

export default App
