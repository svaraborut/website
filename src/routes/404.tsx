import { useNavigate } from 'react-router'
import { useEffect } from 'react'

// Dummy 404 redirect the user back home
export default function PageNotFound() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/')
    }, [])
    return null
}
