import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

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
     </div>
  );
}

export default App;
