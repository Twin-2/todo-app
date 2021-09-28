import React, { useEffect, useState } from 'react';
import Form from "../form/form";
import List from "../list/list"
import { useContext } from "react";
import { SiteContext } from "../../context/siteContext";

const ToDo = () => {

  const siteContext = useContext(SiteContext);

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }


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

        <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />
      </section>
    </main>
  );
};

export default ToDo;
