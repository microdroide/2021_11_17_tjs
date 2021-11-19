import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "./components/Button/Button";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import { REST_ADR, REST_RESSOURCES } from "./config/config";
import store from './store/store';


class App extends React.Component {

  componentDidMount() {
    fetch(`${REST_ADR}${REST_RESSOURCES.images}`)
      .then(f => f.json())
      .then(arr=>this.setState({images:arr}));
  }

  /**
   * Cycle de vie avec didUpdate
   */
  componentDidUpdate() {
    console.log(arguments);
    console.log(
      "%c%s",
      "color:red",
      "le changement est pret et effectif",
      JSON.stringify(this.props));
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <FlexLayout>
        <MemeViewer
              meme={this.props.current}
              image={this.props.images.find((e) => e.id === this.props.current.imageId)}
            />


          
          <MemeForm 
          // meme={this.state.current} onMemeChange={(meme) => {
          //   this.setState({ current: meme})
          // }}
          //   images={ this.state.images}
          />
 
        </FlexLayout>
      </div>
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



