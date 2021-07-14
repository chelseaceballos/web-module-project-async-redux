import React, {useEffect} from 'react'
import { useDispatch} from 'react-redux';
import {fetchQuote} from '../actions/quoteActions';
import "../styles/styles.css";


const Quote = (props) => {
    const { quote, loading } = props
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
                <h3>Kanye once said: {quote} </h3>
                {/* <p>{author}</p> */}
            </div>
        <div className="quote-btn">
            <button onClick={() => fetchQuote(dispatch)} className="btn">Whip Up A Quote</button>
        </div>
        </div>
    )
}

export default Quote;

