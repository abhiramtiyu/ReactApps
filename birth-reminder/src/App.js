import React, {useState} from 'react';
import data from './data';
import List from './List';

function App() {
  const [people,ClearPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday Today</h3>
        <List people = {people}/>
        <button onClick={()=>ClearPeople([])}>Clear All</button>
      </section>
    </main>
  );
};

export default App;
