import React from 'react'
import { connect } from 'react-redux';
import { buyCake, buy_icecream } from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const iteState = ownProps.cake
        ? state.cake.numOfCakes
        : state.iceCream.numOfIceCreams;

    return {
        item: iteState
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const disFunc = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buy_icecream());

    return {
        buyItem: disFunc
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
// export default connect(null, mapDispatchToProps)(ItemContainer);