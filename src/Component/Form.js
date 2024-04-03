import { useState } from "react";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descChangeHandler =(event)=>{
    setDesc(event.target.value)
  }

  const submithandler = (event) => {
    event.preventDefault();
    // console.log(title,desc)
    let obj = {
        title : title,
        desc : desc
    }
    props.onAddNote(obj)
    setDesc('')
    setTitle('')
  };


  return (
    <form onSubmit={submithandler}>
      <label htmlFor="noteTitle"> Note Title</label>
      <input
        onChange={titleChangeHandler}
        value={title}
        id="noteTitle"
        type="text"
      />
      <br></br>
      note Desc:<br></br>
      <textarea
        onChange={descChangeHandler}
        name=""
        id=""
        cols="30"
        rows="10"
        value={desc}
      ></textarea>
      <br></br>
      <button type="submit"> add note</button>
    </form>
  );
};
export default Form;
