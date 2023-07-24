import Card from "../Card/Card";

const Tricks = tricks => {
  let trickCards = tricks.map(trick => {
    return (
      <Card 
        stance = {trick.stance}
        name = {trick.name}
        obstacle = {trick.obstacle}
        tutorial = {trick.tutorial}
      />
    )
  });

  return (
    <div>
      {trickCards}
    </div>
  )
}

export default Tricks;