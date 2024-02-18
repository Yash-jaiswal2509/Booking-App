import { useMutation, useQueryClient } from "react-query"
import * as apiClient from '../api-clients'
import { useAppContext } from "../contexts/AppContext"


const SignOutButton = () => {
    const queryClient = useQueryClient();
    const { showToast } = useAppContext();
    const mutation = useMutation(apiClient.SignOut, {
        onSuccess: async() => {
            await queryClient.invalidateQueries("validateToken");
            showToast({ message: "Signed out", type: "SUCCESS" })
        },
        onError: (error: Error) => {
            showToast({ message: error.message, type: "ERROR" })
        }
    })

    const handleClick = () => {
        mutation.mutate();
    }
    
    return (
        <button onClick={handleClick} className="text-blue-600 p-2 font-bold bg-white rounded-lg hover:bg-gray-100">Sign Out</button>
    )
}

export default SignOutButton;