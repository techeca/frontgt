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
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      : 
        <div className='absolute w-full h-full blur-[500px] opacity-40 bg-slate-400/70'></div>
      }
    </>
  )
}

export default App
