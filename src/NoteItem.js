

const NoteItem = (props)=>{


    return (
        <li>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <button onClick={()=>props.deleteHandler(props.id)}>delete</button>
        </li>
    )
}
export default NoteItem;