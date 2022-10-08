import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";

class First extends React.Component {
  state = {
    objets: [
      { id: 1, nom: "Objet 1" },
      { id: 2, nom: "Objet 2" },
      { id: 3, nom: "Objet 3" },
      { id: 4, nom: "Objet 4" }
    ]
  };

  render() {
    const objets = this.state.objets.map(function (obj) {
      return (
        <li>
          {obj.nom}
          <button>Supprimer</button>
        </li>
      );
    });

    return (
      <div>
        <button>Test </button>
        <h1>Achat d'objet</h1>
        <ul>{objets}</ul>
        <form>
          <input type="text" placeholder="Ajout d'un objet"></input>
          <button>Entrer </button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<First />, rootElement);
