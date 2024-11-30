/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import {
  Card,
  FormField,
  Loader
} from '../components/Components'
import { InfinitySpin } from 'react-loader-spinner';

const Home = () => {
  const [loading, setLoading]=useState(false);
  const [allPosts,setAllPosts]=useState(null);
  const [searchText,setSearchText]=useState("");
  const RenderCards=({data, title})=>{
    if(data?.length>0){
      return data.map((post)=> <Card key={post._id} {...post} />)
    }

    return(
      <h1 className='font-bold text-xl'>{title}</h1>
    )
  }
  return (
    <section className='max-e-7xl mx-auto px-7'>
      <div>
        <h1 className='font-extrabold text-orange-400 text-[25px]'>
          Available Posts
        </h1>
        <p className='mt-2 text-red-200 text-[14px] max-w-[500px]'>This section is created with OpenAi dalle.e</p>
      </div>
      <div className='mt-16'>
        <FormField/>
      </div>
      <div className='mt-10'>
        {
          loading?<div className='flex justify-center'>
          <InfinitySpin
          visible={true}
          width="200"
          color="#FFA726"
          ariaLabel="infinity-spin-loading"
          />
          </div>:
          <>
           {searchText && (
            <h1 className='font-medium text-xl mb-3'>Showing result for '<span className='font-bold text-xl'>{searchText}</span>'</h1>
           )} 

           <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
            {
              searchText?(
                <RenderCards
                data={[]}
                title="no searched result found"
                />
              ):(
                <RenderCards
                data={[]}
                title="No posts found"
                />
              )
            }
           </div>
          </>
        }
      </div>
    </section>
  )
}

export default Home