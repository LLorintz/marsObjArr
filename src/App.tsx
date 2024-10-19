import { FormEvent, useState, useEffect } from 'react'
import './app.css'
import PlayerName from './components/PlayerName/PlayerName'
import Resource from './components/Resource/Resource'
import { resourceProps } from './components/Resource/Resource'
function App() {
  const [resourceArray, setResourceArray] = useState<resourceProps[]>(() => {
    // Itt betöltjük a localStorage-ból az erőforrásokat az állapot inicializálásakor
    const savedResources = localStorage.getItem('resources');
    return savedResources ? JSON.parse(savedResources) : [
      { name: 'Megacredit', amount: 0, production: 0 },
  { name: 'Steel', amount: 0, production: 0 },
  { name: 'Heat', amount: 0, production: 0 },
  { name: 'Plants', amount: 0, production: 0 },
  { name: 'Titan', amount: 0, production: 0 },
    ];
  });






const handleIncrement =(increment: number, index: number, field: 'amount' | 'production')=>{
  setResourceArray((prevResource)=>{
    const updatedResource = [...prevResource];
    updatedResource[index]={
      ...updatedResource[index],
      [field]:updatedResource[index][field]+increment
    };
    return updatedResource;
  })
}



const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  setResourceArray((prevResources) =>
    prevResources.map((resource) => ({
      ...resource,
      amount: resource.amount + resource.production, // A termelés hozzáadása a nyersanyaghoz
    }))
  );
};

// Az erőforrások mentése localStorage-ba, amikor resourceArray frissül
useEffect(() => {
    localStorage.setItem('resources', JSON.stringify(resourceArray));
  }, [resourceArray]);

  return (
    <form onSubmit={handleSubmit} className="container">
        <PlayerName></PlayerName>
        {resourceArray.map((resource, index) => (
        <Resource
          key={resource.name}
          name={resource.name}
          amount={resource.amount}
          production={resource.production}
          onchange={(increment: number) => handleIncrement(increment, index, 'amount')}
          onchangeProductivity={(increment: number) => handleIncrement(increment, index, 'production')}
        />
      ))}
       <button type='submit' className='NextRound'>Next Round</button>
    </form>
  )
}

export default App
