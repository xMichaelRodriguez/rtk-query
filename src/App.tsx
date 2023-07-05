/** @format */
import { useCharactersQuery } from "./services/api";
import { Card } from "./components/Card";
import styles from './styles/card.module.css'
function App() {
  const { data, error, isLoading, isSuccess } = useCharactersQuery("");
  return (
    <>
      <div>
        {error && <p>An error occured</p>}
        {isLoading && <p>Loading...</p>}
      </div>
      {isSuccess && (
        <ul
          className={styles['grid-container']}
        >
          {data.results.map((item) => (
            <li
             
              key={item.id}
            >
              <Card {...item} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
