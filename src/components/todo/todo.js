import React, { useEffect, useState } from 'react';
import Form from "../form/form";
import List from "../list/list"
import { useContext } from "react";
import { SiteContext } from "../../context/siteContext";
import Pages from "../pagination"

const ToDo = () => {

  const siteContext = useContext(SiteContext);

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);


  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  const indexOfLastPost = currentPage * siteContext.itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - siteContext.itemsPerPage;
  const currentItems = list.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incompleteCount}`;
  }, [list]);

  return (
    <main>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      <section>
        <Form setList={setList} list={list} />
        <List list={currentItems} toggleComplete={toggleComplete} deleteItem={deleteItem} />
      </section>
      <Pages itemsPerPage={siteContext.itemsPerPage} totalItems={list.length} paginate={paginate} />
    </main>
  );
};

export default ToDo;
