import React, { useEffect, useState } from 'react';
import Form from "../form/form";
import List from "../list/list"
import { useContext } from "react";
import { SiteContext } from "../../context/siteContext";
import Pages from "../pagination"

const ToDo = () => {
  //context
  const siteContext = useContext(SiteContext);
  //states
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listOfStatus, setListOfStatus] = useState([]);

  //methods
  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //changes the complete/incomplete status of the item
  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  };

  //change the displayed list to show only what the context defines
  const changeList = () => {
    let filteredList = list.filter(item => item.complete === siteContext.displayCompletedItems)
    console.log('@@@@', filteredList)
    setListOfStatus(filteredList)
  }

  //effect hooks
  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incompleteCount}`;
    changeList()
  }, [list]);

  return (
    <main>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      <section>
        <Form setList={setList} list={list} />
        <List list={listOfStatus} currentPage={currentPage} toggleComplete={toggleComplete} deleteItem={deleteItem} />
      </section>
      <Pages itemsPerPage={siteContext.itemsPerPage} totalItems={listOfStatus.length} paginate={paginate} />
    </main>
  );
};

export default ToDo;
