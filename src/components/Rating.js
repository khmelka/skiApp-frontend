import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'

export default class Rating extends Component {
    
    state={
        rating: 0
     }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    onSClick(nextValue, prevValue, name) {
        this.setState({rating: 0});
    }

    render() {
        const { rating } = this.state;
        
        return (                
          <div>
            <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
              onSClick={this.onSClick.bind(this)}
            />
          </div>
        );
    }
    
}
