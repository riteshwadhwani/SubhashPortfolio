import { useCallback, useEffect, useState ,useRef} from 'react'


function PasswordGen() {
  const [length,setLength] = useState(8);
  const [number,setNumber] = useState(false);
  const [char,setChar] = useState(false);
  const [password,setPassword] = useState();

  //useRef hook is used to take the ref and manipulate it
  const refPassword = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDFGCHVYUGUGadfsdfsfgd";
    if(number) str+="0123456789";
    if(char)  str+="^&*()_+{}[]";
    for(let i = 1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[length,number,char,setPassword])

  const copyPassword = useCallback(()=>{
    refPassword.current?.select();//used to select the reference text
    refPassword.current?.setSelectionRange(0,101);//used the select the reference in range
    window.navigator.clipboard.writeText(password);
  },[password])
  
  useEffect(()=>{
    passwordGenerator();
  },[length,number,char,setPassword]);

  return (
    <div className='text-center w-screen h-screen flex justify-center flex-col items-center bg-slate-900 text-slate-200'>
     <div className='w-1/3 h-1/4 bg-slate-500 rounded-md border border-slate-100 backdrop:blur-sm p-3 flex flex-col gap-y-5'> 
            <h1 className='text-2xl font-bold text-green-400'>PasswordGenerator</h1>
            <div className=' text-center'>
              <input  value={password} className='text-cyan-900 rounded-md p-3 w-full'
              ref={refPassword}
              />
            </div>
            <div className='flex justify-around items-center '>
                <div className='flex flex-col'>
                   length:{length}
                  <input type='range'  min={6} max={100} value={length} onChange={(e)=>setLength(e.target.value)}/>
                </div>
                <div className='flex flex-col'>
                   numbers:
                  <input type='checkbox' defaultChecked={char} onClick={()=>{setChar((prev)=>!prev)}}/>
                </div>
                <div className='flex flex-col'>
                   characters:
                  <input type='checkbox' defaultChecked={number} onClick={()=>{setNumber((prev)=>!prev)}}/>
                </div>
            </div>
     </div>
     <div> 
            <button className='p-3 m-3 rounded-md border border-slate-200 px-5 bg-transparent focus:border-slate-200'
            onClick={copyPassword}>
              copy
            </button>
     </div>
    </div>
  
  )
}

export default PasswordGen
