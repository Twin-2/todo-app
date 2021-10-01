import { useContext, useState, useEffect } from "react";
import { SiteContext } from "../../context/siteContext";
import { Card, Elevation, Icon, Tag } from "@blueprintjs/core";
import { save } from "react-cookies";
import Auth from '../../auth/auth';


function List(props) {

    const siteContext = useContext(SiteContext);

    const [displayList, setDisplayList] = useState([])

    const indexOfLastPost = props.currentPage * siteContext.itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - siteContext.itemsPerPage;
    const currentItems = props.list.slice(indexOfFirstPost, indexOfLastPost)

    useEffect(() => {
        setDisplayList(currentItems)
    }, [props.list, props.currentPage])




    return (
        <div className="toDoList">
            {displayList.map((item, idx) => (
                <Card elevation={Elevation.THREE}>
                    <div
                        id={idx}
                        key={item.id}>
                        <div className='title'>
                            <span
                                className={`bp3-tag bp3-round ${item.complete ? 'bp3-intent-danger' : 'bp3-intent-success'}`}
                                onClick={() => props.toggleComplete(item.id)}>{item.complete ? 'Complete' : 'In Progress'}</span>
                            <p>
                                <small>Assigned to: {item.assignee}</small>
                            </p>
                            <Auth capability='delete'>
                                <Icon icon="cross" onClick={() => props.deleteItem(item.id)} />
                            </Auth>
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