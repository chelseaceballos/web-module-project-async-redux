import React, {useEffect} from 'react'
import { useDispatch} from 'react-redux';
import {fetchQuote} from '../actions/quoteActions';
import "../styles/styles.css";


const Quote = (props) => {
    const { title, loading } = props
    // useSelector((state) => state.quoteReducer); 
    // quoteReducer?
    const dispatch = useDispatch();
    useEffect(() => {fetchQuote(dispatch); }, []) // empty dep array for componentDidMount
    if (loading) {
        return <><h2>Loading...</h2></>
    }

    return (
        
        <div className="box">
            <div className="middle"> 
                <h3>Get Random Studio Ghibli Film:</h3>
               <h4>{title}</h4>
            </div>
            <br/>
        <div className="quote-btn">
            <button onClick={() => fetchQuote(dispatch)} className="btn">映画を撮る<br/> Generate Film!</button>
        </div>
        </div>
        
    )
}

export default Quote;

