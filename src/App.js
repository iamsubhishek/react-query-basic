import { QueryClientProvider, QueryClient} from 'react-query'
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {ReactQueryDevtools} from 'react-query/devtools'
import './App.css';
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'

//step 2:  Create object
const queryClient= new QueryClient()

function App() {
  return (
    // step 2 : Wrap into queryClientProvider
    <QueryClientProvider client={queryClient}>

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          {/* <Routes>
            <Route path='/super-heroes'>
              <SuperHeroesPage />
            </Route>
            <Route path='/rq-super-heroes'>
              <RQSuperHeroesPage />
            </Route>
            
            <Route path='/'>
              <HomePage />
            </Route>
          </Routes> */}

<Routes>
            <Route path='/super-heroes' element={<SuperHeroesPage/>} />

            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage/>} /> 
           
            
            <Route path='/' element={<HomePage/>} />
            
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
      </QueryClientProvider>
  )
}
export default App;
