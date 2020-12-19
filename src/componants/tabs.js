import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';
import Tab1 from './message';
import Tab2 from './group';
import Tab3 from './call';
export default class Tabs11 extends Component {
    render(props) {
        return (
            <Tabs tabBarUnderlineStyle={{ backgroundColor: "white",  alignSelf: "center", height: 3 }}  >

                <Tab heading="Message" tabStyle={{ backgroundColor: '#5382B0', width: 50 }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#5382B0' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
            <Tab1 path={props}/>
          </Tab>
          <Tab heading="Group" tabStyle={{ backgroundColor: '#5382B0', width: 50 }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#5382B0' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
            <Tab2 path={props} />
          </Tab>
          <Tab heading="Call" tabStyle={{ backgroundColor: '#5382B0', width: 50 }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#5382B0' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
            <Tab3 path={props}/>
          </Tab>
            
            </Tabs>
        );
    }
}