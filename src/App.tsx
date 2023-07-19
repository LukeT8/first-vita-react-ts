import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   // return (
//   //   <>
//   //     <p>
//   //       Hello World
//   //     </p>
//   //   </>
//   //   // Could replace <></>with <div></div>
//   // )

//   const animals = ["Lion", "Cow", "Snake", "Lizard"];
//   const animalsList = animals.map((animal) => <li key={animal}>animal</li>)
//   return (
//     <div>
//       <h1>Animals: </h1>
//       <ul>
//         {animals.map((animal) => {
//           return <li key={animal}>{animal}</li>;
//         })}
//         {/* {animalsList} */}
//       </ul>
//     </div>
//   );
// }

interface ToolbarProps {
  onClick: () => void;
}

function Toolbar(props: ToolbarProps) {
  return (
      <div>
          <button onClick={() => props.onClick()}>Refresh</button>
      </div>
  );
}

// Referred to this guide for TS transformation https://bobbyhadz.com/blog/react-parameter-props-implicitly-has-an-any-type
interface ListProps{
  animals: string[];
}

interface ListItemProps{
  animal: string;
}

function ListItem(props: ListItemProps) {
  return <li>{props.animal}</li>
}

function List(props: ListProps) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}


export default App
