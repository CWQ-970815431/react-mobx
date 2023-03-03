
function Cell(props){

 

    return (
        <div className="cell" onClick={()=>props.cellClick(props)}>
            {props.loc}{props.value}
        </div>
    )
}

export default Cell