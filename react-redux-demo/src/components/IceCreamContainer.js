import React, { useState } from 'react';
import { buy_icecream } from '../redux';
import { connect } from 'react-redux';

function CakeContainer(props) {

    const [num, setNum] = useState(1);

    function setnum(e){
        // console.log(e.target.value);
        setNum(e.target.value);
    }

    function buy(){
        // console.log(num,props.buy_icecream);
        if(num){
            props.buy_icecream(num);
        }
        else{
            alert("Please insert some value!!!")
        }
        
    }

    return (
        <div>
            <h2>Number of icecreams - {props.numOfIceCreams}</h2>
            <input type="number" name="numOfIceCream" onChange={setnum} id='numOfIceCream' value={num}></input>
            <button onClick={buy}>Buy {num} Icecreams</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buy_icecream: (n) => {
            // console.log(n);
            dispatch(buy_icecream(n))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
