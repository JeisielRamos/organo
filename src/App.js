import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {
  const teams = [
    {
      name: 'Geografia',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Português',
      primaryColor: '#82CFFA',
      secondaryColor: '#E9F8FF'
    },
    {
      name: 'História',
      primaryColor: '#A6F157',
      secondaryColor: '#F0F8E2'
    }
  ]

  const [workers, setWorkers] = useState([])

  const SetNewWorker = (worker) => {
    console.log(worker)
    setWorkers([...workers, worker])
  }

  return (
    <div className="App">
      <Banner />
      <Form registeredWorker = { worker => SetNewWorker(worker)} teams={teams.map(time => time.name)}/>
     
      {teams.map( team => <Team key={team.name} name={team.name} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor} />)}

     </div>
  );
}

export default App;
