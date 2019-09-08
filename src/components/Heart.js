import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'

export default class Heart extends Component {
    
    state={
        rating: 0
     }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }


    render() {
        const { rating } = this.state;
        
        return (                
          <div>
            <StarRatingComponent 
              name="rate1" 
              starCount={1}
              value={rating}
              renderStarIcon={() => <span>♡
                WHITE HEART SUIT
                Unicode: U+2661, UTF-8: E2 99 A1</span>}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
        );
    }
    
}