import { useState } from "react";

function App() {
  const [desc, setDesc] = useState('');
  const [cost, setCost] = useState('');
  const [quantity, setQuantity] = useState('');
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const addItem = () => {
    const newItem = {
      'desc': desc,
      'cost': cost,
      'quantity': quantity,
      'price': quantity * cost
    }
    setItems([...items, newItem]);  
    setTotal(total + newItem.price);
  }
  const submitInvoice = () => {
    console.table(items)
    console.log('Total: ', total)
  }

  return (
    <div className="App">
      <div className="form-row">
        <div>
          <label htmlFor="">Description</label>
          <input type="text" value={desc} onChange={e => setDesc(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="">Cost</label>
          <input type="text" value={cost} onChange={e => setCost(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="">Quantity</label>
          <input type="text" value={quantity} onChange={e => setQuantity(e.target.value)}></input>
        </div>
        <button onClick={addItem}>Add item</button>
      </div>
      <table className="invoice">
        <thead>
          <tr>
            <th>Description</th>
            <th>Cost</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.desc}</td>
              <td>${item.cost}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        Total: ${total}
      </div>
      <div className="submit"><button onClick={submitInvoice}>Submit Invoice</button></div>
    </div>
  );
}

export default App;
