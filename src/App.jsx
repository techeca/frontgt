import { Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useNavigeishon from './hooks/useNavigeishon';
import DefaultLayout from './components/layouts/DefaultLayout';


function App() {
  const [isLoad, setIsLoad] = useState(false);
  const location = useLocation();
  const navigeishon = useNavigeishon()

  useEffect(() => {
    if(navigeishon.checkPage(location.pathname)){ setIsLoad(true) }
  }, [])
  

  return (
    <>
      {isLoad ?
        navigeishon.userService.usuario ? 
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
        :
          <Outlet />
      : <>Cargando . . .</>}
    </>
  )
}

export default App
