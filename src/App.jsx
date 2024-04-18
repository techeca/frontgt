import { Outlet } from 'react-router-dom'
import DefaultLayout from './components/layouts/DefaultLayout';

function App() {

  return (
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
  )
}

export default App
