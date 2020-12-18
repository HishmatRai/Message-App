import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';
import Tab1 from './message';
import Tab2 from './group';
import Tab3 from './call';
export default class Tabs11 extends Component {
    render() {
        return (
            <Tabs tabBarUnderlineStyle={{ backgroundColor: "#5382B0",  alignSelf: "center", height: 6 }}  >

                <Tab heading="Message" tabStyle={{ backgroundColor: '#5382B0', width: 50 }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#5382B0' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
            <Tab1 />
          </Tab>
          <Tab heading="Group" tabStyle={{ backgroundColor: '#5382B0', width: 50 }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#5382B0' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
            <Tab2 />
          </Tab>
          <Tab heading="Call" tabStyle={{ backgroundColor: '#5382B0', width: 50 }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#5382B0' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
            <Tab3 />
          </Tab>
            
            </Tabs>
        );
    }
}