import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./Navbar/Navbar";
import CardList from "./CardList/CardList";
import ManageCards from "./ManageCards/ManageCards";
import NotFound404 from "./NotFound404";

import api from "../api";
import "./app.css";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const d = await api.getItems();
      console.log(d);
      setData(d);
    };

    fetchData();
  }, []);

  const deleteCard = async (id) => {
    await api.deleteItem(id);
    const d = await api.getItems();
    setData(d);
  };

  const updateItem = async (card) => {
    await api.putItem(card);
    const d = await api.getItems();
    setData(d);
  };

  const newItem = async (card) => {
    await api.postItem(card);
    const d = await api.getItems();
    setData(d);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            {data && <CardList allData={data} />}
          </Route>
          <Route path="/cards" exact>
            {data && (
              <ManageCards
                allData={data}
                deleteCard={deleteCard}
                updateItem={updateItem}
                newItem={newItem}
              />
            )}
          </Route>
          <Route component={NotFound404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
