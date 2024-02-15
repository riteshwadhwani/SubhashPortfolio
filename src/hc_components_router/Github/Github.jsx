import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch("https://api.github.com/users/riteshwadhwani")
        .then((response)=>response.json())
        .then((data)=>{{setData(data);
        }});
        // console.log(data)
    },[])
  return (
    <div>Github:{data.followers}</div>
  )
}

export default Github