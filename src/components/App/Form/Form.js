import { useState } from "react";

const Form = () => {
  const [stance, setStance] = useState('');
  const [name, setName] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [tutorial, setTutorial] = useState('');

  return (
    <form>
      <select
        value={stance}
        defaultValue=""
        onChange={e => setStance(e.target.value)}
      >
        <option disabled={true} value="">
          --Choose a Stance--
        </option>
        <option value="Regular">Regular</option>
        <option value="Switch">Switch</option>
      </select>
      <input 
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <select
        value={obstacle}
        defaultValue=""
        onChange={e => setObstacle(e.target.value)}
      >
        <option disabled={true} value="">
          --Choose an Obstacle--
        </option>
        <option value="Flatground">Flatground</option>
        <option value="Ledge">Ledge</option>
        <option value="Rail">Rail</option>
        <option value="Stairs">Stairs</option>
        <option value="Pool">Pool</option>
      </select>
      <input 
        type="text"
        value={tutorial}
        onChange={e => setTutorial(e.target.value)}
      />
      <button>SEND IT</button>
    </form>
  )
}

export default Form;