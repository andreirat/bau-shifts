import React, { Component } from "react";
import { List, Avatar } from "antd";

class Engineers extends Component {
  
  componentDidMount() {
    this.props.getEngineers();
  }
  
  render() {
    let { engineers } = this.props;
    return <List
      itemLayout="horizontal"
      dataSource={ engineers }
      renderItem={ item => (
        <List.Item>
          <List.Item.Meta
            avatar={ <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/> }
            title={ item.name }
            description={ `Shifts worked this week: ${ item.shifts_worked }` }
          />
        </List.Item>
      ) }
    />
  }
}

export default Engineers
