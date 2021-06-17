import React, { Component } from "react";

import { Statistic, Card, Row, Col, Button, List, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getAvailableEngineers, selectTodayEngineers } from "../../utils";

class Home extends Component {
  
  componentDidMount() {
    this.props.getEngineers();
    this.props.getShiftInfo();
  }
  
  /**
   * Calculate and update engineers list, update today's shift and yesterday shift
   * Update engineers list in state
   */
  onAssignEngineersPress = () => {
    const { engineers, shiftInfo } = this.props;
    let availableEngineers = getAvailableEngineers( engineers, shiftInfo.todayShift );
    let updatedList = selectTodayEngineers( availableEngineers, engineers );
    this.props.assignEngineers( {
      engineers: updatedList.engineers,
      todayShift: updatedList.todayShift,
      yesterdayShift: shiftInfo.todayShift
    } );
  }
  
  render() {
    let { shiftInfo } = this.props;
    return <div>
      <Row className="row-margin-bottom">
        <Button type="primary" onClick={ this.onAssignEngineersPress }>
          Select engineers
        </Button>
      </Row>
      <div className="site-statistic-demo-card">
        <Row gutter={ 16 }>
          <Col span={ 12 }>
            <Card>
              <Statistic
                title="Today Shift"
                value={ shiftInfo.todayShift || "Nobody assigned" }
                prefix={ <UserOutlined/> }
              />
            </Card>
          </Col>
          <Col span={ 12 }>
            <Card>
              <Statistic
                title="Yesterday Shift"
                value={ shiftInfo.yesterdayShift || "Nobody assigned" }
                prefix={ <UserOutlined/> }
              />
            </Card>
          </Col>
        </Row>
      </div>
      <Row>
        <Col span={ 12 }>
          { (shiftInfo.todayShift && shiftInfo.todayShift[0]) && <List.Item>
            <List.Item.Meta
              avatar={ <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/> }
              title={ shiftInfo.todayShift[0] }
              description={ `${ shiftInfo.todayShift[0] } will be in the first half of the day.` }
            />
          </List.Item> }
        </Col>
      </Row>
      <Row>
        <Col span={ 12 }>
          { (shiftInfo.todayShift && shiftInfo.todayShift[1]) && <List.Item>
            <List.Item.Meta
              avatar={ <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/> }
              title={ shiftInfo.todayShift[1] }
              description={ `${ shiftInfo.todayShift[1] } will be in the first half of the day.` }
            />
          </List.Item> }
        </Col>
      </Row>
    </div>
  }
}

export default Home
