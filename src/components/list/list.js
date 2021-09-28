import { useContext, useEffect } from "react";
import { SiteContext } from "../../context/siteContext";
import { Card, Elevation, Icon, Tag } from "@blueprintjs/core";


function List(props) {

    const siteContext = useContext(SiteContext);




    return (
        <div className="toDoList">
            {props.list.map((item, idx) => (
                <Card elevation={Elevation.THREE}>
                    <div display='true' id={idx} key={item.id}>
                        <div className='title'>
                            <span className={`bp3-tag bp3-round ${item.complete ? 'bp3-intent-danger' : 'bp3-intent-success'}`} onClick={() => props.toggleComplete(item.id)}>{item.complete ? 'Complete' : 'In Progress'}</span>
                            <p><small>Assigned to: {item.assignee}</small></p>
                            <Icon icon="cross" onClick={() => props.deleteItem(item.id)} />
                        </div>
                        <hr />
                        <p>{item.text}</p>
                        <p className="difficulty"><small>Difficulty: {item.difficulty}</small></p>
                    </div>
                </Card>
            ))
            }
        </div >
    )
}

export default List