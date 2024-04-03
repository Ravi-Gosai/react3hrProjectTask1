import Form from "./Component/Form";
import "./App.css";
import { useState } from "react";
import NoteItem from "./NoteItem";
import Notebook from "./Component/NoteBook";

function App() {

  const [noteList,setNoteList]= useState([])
  const [filterList, setFilterList] = useState([])
  const [printFilter, setPrintFilter] = useState(false)


  const addNoteFunc = (addedNote)=>{
  addedNote.id = noteList.length +1 + Math.random()
    // console.log(addedNote)
    
    setNoteList([...noteList,addedNote])
    console.log(noteList)
  }

  const deleteHandler = (id) =>{
    console.log(id)

    setNoteList(()=>{
      return noteList.filter((note)=>note.id !== id)
    })
    

  }
  const filterHandler = (id)=>{
    setNoteList(()=>{
      return noteList.filter((note)=>note.id !== id)
    })
    setFilterList(()=>{
      return filterList.filter((note)=>note.id !== id)
    })

  }

  const filterFun = (keyValue)=>{

    if(keyValue === ''){
        setPrintFilter(false)
        setFilterList('')
    }else{
      setFilterList(()=>{
        const demonodelist = noteList
         return demonodelist.filter((ele)=>ele.title.indexOf(keyValue) !== -1)
      })
  
      console.log(filterList)
      setPrintFilter(true)
    }
  
  }
  

  return (
    <>
    <div className="maindiv">
      <div> 
      <Form onAddNote={addNoteFunc}></Form>
      <ul>
         {!printFilter && noteList.map((note)=><NoteItem deleteHandler={deleteHandler} key={note.id}  {...note}></NoteItem>)}

         {printFilter && filterList.map((note)=><NoteItem deleteHandler={filterHandler} key={note.id}  {...note}></NoteItem>)}
       
      </ul>
      </div>
      <div className="notebook">
      <Notebook nodelist={noteList} filterList={filterList} filterFun={filterFun}></Notebook>
    </div>
    </div>
   
    </>
  );
}

export default App;
