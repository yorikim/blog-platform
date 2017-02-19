import React from 'react';
import BlogList from './blog-list';
import PieChart from './pie-chart';
import Immutable from 'immutable';
import request from 'superagent';
import {server} from 'constants/settings';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: Immutable.List([])
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      `${server}/posts/`,
      {},
      (err, res) => this.setState({items: Immutable.fromJS(res.body)})
    );
  }

  handleLike(itemId) {
    const {items} = this.state;
    const index = items.findIndex((item) => item.get('id') == itemId);

    this.setState({
      items: items.update(index,
        (item) => item.updateIn(['meta', 'likes'], (value = 0) => value + 1)
      )
    });
  }

  render() {
    const {items} = this.state;
    const pureItems = items.toJS();
    const pieChartItems = pureItems.map((item) => [item.text, item.meta.likes || 0]);

    return (
      <div className="container">
        <BlogList items={pureItems} handleLike={this.handleLike.bind(this)}/>
        <PieChart items={pieChartItems}/>
      </div>
    );
  }
}

export default BlogPage;