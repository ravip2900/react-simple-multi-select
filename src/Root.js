import React from 'react';
import { hot } from 'react-hot-loader';
import MultiSelect from './components/MultiSelect';

class Root extends React.Component{
  constructor(props){
    super(props);
    this.state={
      itemList:['A', 'B', 'C', 'D', 'E'],
      selectedItemList:['A', 'C', 'E']
    };
    this.changeList = this.changeList.bind(this);
  }

  changeList(item, action){
    let {selectedItemList} = this.state;
    if(action){
      selectedItemList.push(item);
    }else{
      selectedItemList.splice(selectedItemList.indexOf(item),1);
    }
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
          // borderRadius={40}
          // borderColor={""}
          // borderTopColor={"purple"}
          // borderRightColor={'red'}
          // borderLeftColor={'green'}
          // borderBottomColor={'orange'}
          // textColor={'blue'}
          // iconColor={'brown'}
        />
      </div>
    )
  }
}

export default hot(module)(Root);
