import { useMutation, useQueryClient } from 'react-query';
import * as apiCLient from '../api-client';
import { useAppContext } from '../contexts/AppContext';
const SignOutButton = () => {
    const queryClient = useQueryClient();
    const {showToast} = useAppContext();
    const mutation = useMutation(apiCLient.signOut,{
        onSuccess:async()=>{
            await queryClient.invalidateQueries("validateToken");
            showToast({message:"Signed Out!",type:"SUCCESS"});
        },
        onError:(error:Error)=>{
            showToast({message:error.message,type:"ERROR"});
        }
    })
    const handleClick = () =>{
        mutation.mutate();
    }
  return (
    <button onClick={handleClick} className="text-white px-3 font-bold bg-black hover:bg-orange-600">
      Sign Out
    </button>
  )
}

export default SignOutButton
