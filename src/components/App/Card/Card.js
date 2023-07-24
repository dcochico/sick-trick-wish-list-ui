import '../Card/Card.css';

const Card = ({ stance, name, obstacle, tutorial }) => {
  return (
    <div className='card-container'>
      <p>{stance}</p>
      <p>{name}</p>
      <p>{obstacle}</p>
      <p>{tutorial}</p>
    </div>
  )
}

export default Card;