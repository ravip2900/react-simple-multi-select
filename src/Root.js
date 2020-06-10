import React from 'react';
import { hot } from 'react-hot-loader';
import MultiSelect from './components/MultiSelect';

class Root extends React.Component{
  constructor(props){
    super(props);
    this.state={
      itemList: [
        {key:"React Js", value:"react"},
        {key:"Node Js", value:"node"},
        {key:"Express Js", value:"express"},
        {key:"Next Js", value:"next"},
        {key:"Vue Js", value:"vue"},
        {key:"Mongo Db", value:"mongo"}
      ],
      selectedItemList: [
        {key:"React Js", value:"react"},
        {key:"Next Js", value:"next"},
        {key:"Mongo Db", value:"mongo"}
      ]
      // ,
      // selectedValues:[
      //   "react",
      //   "next",
      //   "mongo"
      // ]
    };
    this.changeList = this.changeList.bind(this);
  }

  changeList(selectedItemList){
    this.setState({selectedItemList});
  }

  render(){
    return(
      <div>
        <h1>React Simple Multi Select</h1>
        <MultiSelect
          title={"Multi Select"}
          itemList={this.state.itemList}
          selectedItemList={this.state.selectedItemList}
          changeList={this.changeList}
          isObjectArray={true}
          // selectedValues={this.state.selectedValues}
          // borderRadius={40}
          // borderColor={""}
          // borderTopColor={"purple"}
          // borderRightColor={'red'}
          // borderLeftColor={'green'}
          // borderBottomColor={'orange'}
          // textColor={'blue'}
          // iconColor={'brown'}
          // listItemColor={"blue"}
          // listBackgroundColor={"red"}
        />
        <h1>hello</h1>
      </div>
    )
  }
}

export default hot(module)(Root);
