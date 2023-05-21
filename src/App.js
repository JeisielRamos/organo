import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [workers, setWorkers] = useState([])

  const SetNewWorker = (worker) => {
    console.log(worker)
    setWorkers([...workers, worker])
  }
  return (
    <div className="App">
      <Banner />
      <Form registeredWorker = { worker => SetNewWorker(worker)}/>
      <Team name="Liderança"/>
      <Team name="Geografia"/>
      <Team name="Novo Testamento"/>
     </div>
  );
}

export default App;
