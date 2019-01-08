import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class GalleryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      counter: 0
    };
  }
  addImage = () => {
    this.state.images.push({
      id: this.state.counter,
      url: "https://picsum.photos/200/300/?random"
    });
    this.setState({
      counter: this.state.counter + 1,
      images: this.state.images
    });
  };
  render() {
    return (
      <div>
        <div>
          {this.state.images.map(item => (
            <div>
              <img src={item.url} />
            </div>
          ))}
        </div>
        <div>
          <button onClick={this.addImage}>Agregar Imagen</button>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <GalleryList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
