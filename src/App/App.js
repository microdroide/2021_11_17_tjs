import React, { Component } from "react";
import Button from "./components/Button/Button";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import { REST_ADR, REST_RESSOURCES } from "./config/config";
import store from './store/store';


class App extends React.Component {
  counter = 0;

  constructor(props) {
    super(props);
    this.state = {

      current: {
        imageId: 0,
        titre: "nom 1er meme",
        text: "stop la triche",
        x: 370,
        y: 600,
        fontSize: 27,
        color: "tomato",
        fontWeight: "900",
        underline: true,
        italic: true,
        frameX: 0,
        frameY: 0,
      },

      images: [
        {
          id: 0,
          url: "img/meme1.jpg",
          titre: "meme1",
          h: 778,
          w: 736,
        },
        {
          id: 1,
          url: "img/camera.png",
          titre: "camera",
          h: 768,
          w: 922,
        }
      ],
    };
  }

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
      JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <FlexLayout>
          <MemeViewer
              meme={ this.state.current } 
              image={this.state.images.find((e) => e.id === this.state.current.imageId)}

          />
          <MemeForm meme={this.state.current} onMemeChange={(meme) => {
            this.setState({ current: meme})
          }}
            images={ this.state.images}
          />
        </FlexLayout>
      </div>
    );
  }
}

export default App;
