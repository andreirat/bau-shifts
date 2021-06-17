import React, { Component } from "react";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import { withRouter, Switch, BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import { Menu, Layout } from "antd";
import { UserOutlined, DesktopOutlined, } from "@ant-design/icons";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Engineers from "../pages/Engineers";

const { Sider, Header, Content } = Layout;

class Root extends Component {
  render() {
    return (
      <Router>
        <Layout className="full-layout">
          <Sider>
            <div className="logo"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={ [ "1" ] }>
              <Menu.Item key="1" icon={ <DesktopOutlined/> }>
                <NavLink to={ "/" }>Shifts</NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={ <UserOutlined/> }>
                <NavLink to={ "/engineers" }>Engineers</NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={ { padding: 0 } }>
            </Header>
            <Content className="site-layout-background content">
              <Switch>
                <Route exact path="/" component={ Home }/>
                <Route exact path="/engineers" component={ Engineers }/>
                <Route component={ NotFound }/>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

function mapStateToProps( state, props ) {
  return {};
}

function mapDispatchToProps( dispatch, props ) {
  return bindActionCreators(
    {},
    dispatch
  );
}

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Root ) )
