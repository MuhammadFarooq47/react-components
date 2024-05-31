import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../../public/vite.svg'
import '../../App.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [count, setCount] = useState(0)
  const navigation = useNavigate()
  const handleClick = () => {
    navigation('/login')
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/Home.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button onClick={handleClick} style={{ backgroundColor: 'blue', color: 'white' }} btnText='Click Me!' />

    </>
  )
}

export default Home;
