
const Notebook = (props)=>{

    const keyupFun = (event)=>{
        const currtext = event.target.value.toLowerCase();
        props.filterFun(currtext)
    }
    return (
        <>
        <h2>NoteBook</h2>
        <label htmlFor="searchNote"> search note :  </label>
        <input type="text" onKeyUp={keyupFun}></input>
        <br></br>
        <br></br>
        <span> Total Notes : {props.nodelist.length} </span>
        <br></br>
        <span> showing : {props.filterList.length}</span>
        </>
    )
}
export default Notebook;