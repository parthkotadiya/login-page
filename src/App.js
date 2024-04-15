import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({ uname: "" })

  return (<>
    <div className='flex justify-center bg-red-400 p-12'>
      <div className='w-[364px] h-[596px] demo1 '>
        <div className='flex justify-center '>
          <img src='https://img.freepik.com/free-vector/flat-design-data-
        logo-template_23-2149192865.jpg?t=st=1712832443~exp=1712836043~hmac=66bbb10f79f731da53eab752b4c7ef1b59873e98140f3a4bd96b60569b172963&w=740'
            width="92px" height="90px" className='demo2' />
        </div>
        <br />
        <h1 style={{ fontSize: "30px" }} ><b>Web Development</b></h1>
        <h1  >Made easy!</h1>
        <br /><br /><br />
        <div className='flex justify-center'>
          <div className='demo3'>
            <img src='https://cdn-icons-png.flaticon.com/128/747/747376.png' width="25px" height="10px" />
            <input type='text' id='uname' name='uname' value={data.uname} className='demo4' placeholder='username' />

          </div>
        </div>
        <br />
        <div className='flex justify-center'>
          <div className='demo3'>
            <img src='https://cdn-icons-png.flaticon.com/128/2889/2889676.png' width="25px" height="10px" />
            <input type='password' id='pass' name='pass' className='demo4' value={data.pass} placeholder='password' />

          </div>
        </div>
        <br />
        <button type='button' className='bg-sky-400 px-20 py-3' style={{ borderRadius: "20px" }}  >Login </button>
        <h1><b><span style={{ color:'gray'}}>Forgot password?</span> or <a><span style={{ color:'gray'}}>Sign up</span></a></b></h1>
      </div>


    </div></>

  );
}

export default App;
