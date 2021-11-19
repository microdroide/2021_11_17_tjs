import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";

import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
  


class App extends React.Component {
  componentDidUpdate() {
    console.log(
      "%c%s",
      "font-size:10pt;color:red;background-color:skyblue;border:1px solid black;text-align:center",
      "le changement est pret et effectif" + JSON.stringify(this.props)
    );
  }
  render() {
    console.log('APP-->', this.props)
    return (
      <>
        <Header />
        <Navbar/>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <h1>Bonjour et bienvenue</h1>
              Voici le nouveau generateur de la version 2021
        
            </Route>
            <Route path="/thumbnail">
              <h1>thumbnail</h1>
              <MemeThumbnail/>
            </Route>
            <Route path="/edit">
              <h1>Edit</h1>
            </Route>

          </Switch>



          <MemeThumbnail/>
          {/* <FlexLayout>
            <MemeViewer
              meme={this.props.current}
              image={this.props.images.find((e) => e.id === this.props.current.imageId)}
            />
           <MemeForm
             
              // onMemeChange={(meme) => {
              //   this.setState({ current: meme })
              // }}
           
            />  
          </FlexLayout> */}
        </div>
      </>
    );
  }
}
function mapStateToProps(state,own){
  return {
    ...own,
    current:state.current,
    images:state.ressources.images
  }
}
function mapDispatchToProps(dispatch)
{
  return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
