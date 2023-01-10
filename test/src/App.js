import { useState } from "react";

function App() {
  // state(etat, données)
  const [items, setItems] = useState([
    { id: 1, nom: "Cobble" },
    { id: 2, nom: "Epee" },
    { id: 3, nom: "Dirt" }
  ]);

  const [newItem, setNewItem] = useState("");

  // comportements
  const handleDelete = (id) => {
    const itemsCopy = [...items];
    const itemsCopyUpdated = itemsCopy.filter((item) => item.id !== id);
    setItems(itemsCopyUpdated);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const itemsCopy = [...items];

    const id = new Date().getTime();
    const nom = newItem;
    itemsCopy.push({ id, nom });

    setItems(itemsCopy);
    setNewItem("");
  };

  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  // affichage (render)
  return (
    <div>
      <h1>Liste d'objets</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.nom} <button onClick={() => handleDelete(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={newItem}
          type="text"
          placeholder="ajouter un item.."
          onChange={handleChange}
        />
        <button>Ajouter +</button>
      </form>
    </div>
  );
}

export default App;
