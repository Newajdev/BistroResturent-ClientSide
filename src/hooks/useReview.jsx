import axios from "axios";
import { useEffect, useState } from "react";


const useReview = () => {
    const [reviews, setReviews] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios('http://localhost:5000/reviews')
            .then(res => {
                setReviews(res.data)
                setLoading(false)
            })
    }, [])
    return [reviews, loading]
};

export default useReview;