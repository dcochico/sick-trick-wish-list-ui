import { useState } from "react";

const Form = () => {
  const [stance, setStance] = useState('');
  const [name, setName] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [tutorial, setTutorial] = useState('');

  return (
    <div>
      <select>
        <option disabled={true} value="">
          --Choose a Stance--
        </option>
        <option value="Regular">Regular</option>
        <option value="Switch">Switch</option>
      </select>
      <select>
        <option disabled={true} value="">
          --Choose an Obstacle--
        </option>
        <option value="Flatground">Flatground</option>
        <option value="Flatground">Ledge</option>
        <option value="Flatground">Rail</option>
        <option value="Flatground">Stairs</option>
        <option value="Flatground">Pool</option>
      </select>
    </div>
  )
}

export default Form;