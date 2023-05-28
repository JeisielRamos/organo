import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const [teams, setTeams] = useState([
    {
      name: 'Devops',
      color: '#57C278',
    },
    {
      name: 'BackEnd',
      color: '#82CFFA'
    },
    {
      name: 'FrontEnd',
      color: '#A6F157',
    }
  ])

  const [workers, setWorkers] = useState([])

  const SetNewWorker = (worker) => {
    setWorkers([...workers, worker]);
  }

  const updatedTeamsColor = (color, name) => {
    setTeams(teams.map((team) => {
      if (team.name === name) {
        team.color = color
      }
      return team
    }))
  }

  function deletedWorker(){
    console.log('deleted');
  }
  return (
    <div className="App">
      <Banner />
      <Form registeredWorker = { worker => SetNewWorker(worker)} teams={teams.map(time => time.name)}/>
     
      {teams.map( team => 
        <Team 
          key={team.name} 
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
