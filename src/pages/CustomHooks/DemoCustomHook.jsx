import React, { useReducer } from 'react'
import useRouting from '../Hooks/useRouting'
import useRedux from '../Hooks/useRedux';
import useFetchData from '../Hooks/useFetchData'
import useGetApi from '../Hooks/useGetApi';
//hooks là hàm sử dụng trong react component


/*
  Custom hook tạo ra dựa trên các logic của các hook có sẵn
*/
const DemoCustomHook = () => {
  const routing = useRouting();
  const { rootState, dispatch } = useRedux();
  const {
    data,
    loading,
    error,
    refetch
  } = useGetApi('https://apistore.cybersoft.edu.vn/api/Product');

  console.log('rootState', rootState);

  const renderApi = () => {
    if(loading){
      return <div className='bg-dark text-white p-3 my-2'>loading ....</div>
    }else {
      return data?.content?.map(item=>{
        return <p key={item.id}> {item.name}</p>
      })
    }
  }
  console.log(routing);
  return (
    <div className='container'>
      <h3>Custom home</h3>
      <p>Redux number reducer: {rootState.numberReducer}</p>
      <button className='btn btn-success' onClick={() => {
        routing.navigate('/');
      }}>back to home</button>
      <h3>Use fetchData</h3>
      {renderApi()}
   
    </div>
  )
}

export default DemoCustomHook