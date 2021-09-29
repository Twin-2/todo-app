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

  //control sort of list based on context
  const listSort = () => {
    // console.log('1', list)
    list.sort((a, b) => a[siteContext.defaultSort] - b[siteContext.defaultSort])
    // console.log('2', list)
  }

  //change the displayed list to show only what the context defines
  const changeList = () => {
    if (!siteContext.displayCompletedItems) {
      let filteredList = list.filter(item => item.complete === siteContext.displayCompletedItems)
      return setListOfStatus(filteredList)
    }
    return setListOfStatus(list)
  }

  //effect hooks
  useEffect(() => {
    if (localStorage.getItem('list')) {
      let storedList = localStorage.getItem('list')
      let list = JSON.parse(storedList)
      setList(list)
    };
  }, [])

  useEffect(() => {
    listSort()
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incompleteCount}`;
    changeList()
    localStorage.setItem('list', JSON.stringify(list))
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
