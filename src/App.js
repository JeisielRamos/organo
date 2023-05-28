import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#57C278',
    },
    {
      id: uuidv4(),
      name: 'BackEnd',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'FrontEnd',
      color: '#A6F157',
    }
  ])

  const [workers, setWorkers] = useState([])

  const SetNewWorker = (worker) => {
    setWorkers([...workers, worker]);
  }

  const updatedTeamsColor = (color, id) => {
    setTeams(teams.map((team) => {
      if (team.id === id) {
        team.color = color
      }
      return team
    }))
  }

  const deletedWorker = (id) => {
    setWorkers(workers.filter(worker => worker.id!== id));
  }
  return (
    <div className="App">
      <Banner />
      <Form registeredWorker = { worker => SetNewWorker(worker)} teams={teams.map(time => time.name)}/>
     
      {teams.map( team => 
        <Team 
          key={team.name+""+team.id} 
          id={team.id}
          name={team.name}
          updatedTeamsColor={updatedTeamsColor}
          color={team.color}
          workers={workers.filter(worker => worker.team === team.name)}
          whenDeleted={deletedWorker}
        />)
      }
      <Footer />
     </div>
  );
}

export default App;
