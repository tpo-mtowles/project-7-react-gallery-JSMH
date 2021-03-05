import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import PhotoData from './Components/PhotoData';
import SearchForm from './Components/SearchForm';
import SearchResults from './Components/SearchResults'
import Home from './Components/Home'
import ErrorPage from './Components/ErrorPage'


//Handles routing for components 

const App = () => (

  <BrowserRouter>
  <div className="container">
    <SearchForm />
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/flowers">
        <PhotoData key='Flowers' title='Flowers' tag='flowers'/>
      </Route>
      <Route path="/roads">
        <PhotoData key='Roads' title='Roads' tag='roads'/>
      </Route>
      <Route path="/sports">
        <PhotoData key='Sports' title='Sports' tag='sports'/>
      </Route>
      <Route path="/penguins">
        <PhotoData key='Penguins' title='Penguins' tag='penguins'/>
      </Route>
      <Route path="/search/:searchText" component={SearchResults}/>
      <Route component={ErrorPage}/>
    </Switch>  
  </div>
 </BrowserRouter>
);

export default App;
