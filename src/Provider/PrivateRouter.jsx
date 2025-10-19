import React, { use } from 'react'
import { AuthContext } from './Authprovider'
import { Navigate } from 'react-router'

const PrivateRouter = ({children}) => {
    const {user ,loading} = use(AuthContext)
    if(loading){
        return <div className='w-full h-screen flex items-center justify-center text-2xl'>Loading...</div>
    }
    if(user){
        return children
    }else{
        return <Navigate to='/login'></Navigate>
    }
}

export default PrivateRouter