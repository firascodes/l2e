import './App.css';
import Courses from './components/Courses';
import { ethers } from 'ethers';
import { useRef, useState } from 'react';

function App() {

  const [account, setAccount] = useState(null);
  const coursesRef = useRef(null);

  const scrollToCourses = () => {
    coursesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const connectHandler = async () => {
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account);
}

  return (
    <div className="App">
        <div className="min-h-screen bg-violet-100  text-white">
            <nav className=" p-4 bg-violet-200">
                <div className="container mx-auto flex items-center justify-between">
                    <div>
                        <a href="/" ><img src="/images/dsshort.png" alt='Logo' className='logonav'/></a>
                    </div>
                    <ul className='flex flex-row gap-9 justify-end '>
                      <li>Home</li>
                      <li>Courses</li>
                      <li>About</li>
                      <li>FAQ</li>
                      </ul>
                    {account ? (
                    <button type='button' className='font-bold bg-purple-300 rounded px-3 py-2  text-white'>
                      {account.slice(0,5) + '...' + account.slice(38,42)}
                    </button>
                     ) : (
                      <button type='button' className="font-bold bg-violet-400 rounded px-4 py-2  text-white" onClick={connectHandler}>
                      Connect
                      </button>
                    )}
                    
                    
                </div>
            </nav>

            <div className="container mx-auto flex flex-col items-center justify-center py-20 text-center  h-screen">
                {/* <h1 className="text-5xl font-bold mb-4">Welcome to DecentraSchool</h1> */}
                <img src='/images/dslong.png' alt='logo' className='logohero my-5 ' />
                <div className='bg-violet-300 py-3 container infobox  text-white'>
                <p className="text-lg mb-2 font-bold  ">A learn-to-earn platform for buying and viewing courses. Start your journey with us today</p>
                <p className="text-lg mb-2 font-bold">India's best L2E Platform</p>
                </div>
                <button className="bg-[#2dcddfa2] hover:bg-[#2dcddf] text-white font-bold py-2 px-4 rounded mt-2" onClick={scrollToCourses}>
                    View Courses
                </button>
            </div>
            <div className="bg-violet-200">
            <section ref={coursesRef} className="container mx-auto py-20 text-center">
            <Courses />
            </section>
            </div>
            
        </div>
    </div>
  );
}

export default App;
