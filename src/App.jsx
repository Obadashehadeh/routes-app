
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Posts from "./posts";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Link to="/">
            <button>Home</button>
        </Link>
        <Link to="/Posts">
            <button>Posts</button>
        </Link>

    {/* Routes*/}
        <Routes>
            <Route path="/" element={<h1>Welcome Home page</h1>}></Route>
            <Route path="/posts" element={<Posts />}>
            </Route>

        </Routes>
    </>
  )
}

export default App
