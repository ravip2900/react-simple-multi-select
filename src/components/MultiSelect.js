import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, Button, DropDown, DropIcon, ListItem, ItemCheck, ItemLabel, ItemSpan} from './index';

class MultiSelect extends React.Component{
  constructor(props){
    super(props);
    this.state={
      display : false
    }
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOpen(){
    const {display} = this.state;
    this.setState({display:!display});
    window.addEventListener('mousedown', this.handleClickOutside, false);
  }

  handleClickOutside(event){
    if(this.wrapperRef && !this.wrapperRef.contains(event.target)){
      this.setState({display:false});
      window.removeEventListener('mousedown', this.handleClickOutside, false);
    }
  }

  componentWillUnmount(){
    window.removeEventListenr('mousedown', this.handleClickOutside, false);
  }

  renderList(){
    let {itemList=[]} = this.props,
      selectedItemList = this.props.selectedItemList ?  [...this.props.selectedItemList] : [];

    return itemList.map(item=>{
      const index = selectedItemList.indexOf(item);
      if(index >-1){
        selectedItemList.splice(index,1)
      }
      return(
        <ListItem key={item} onClick={ () => this.props.changeList(item, index>-1?false:true) }>
          <ItemCheck type='checkbox' checked={index>-1?true:false} />
          <ItemLabel>
            <ItemSpan>{item}</ItemSpan>
          </ItemLabel>
        </ListItem>
      )
    });
  }

  render(){
    const {display} = this.state,
      styles={
        borderRadius : `${this.props.borderRadius}px`,
        borderColor : this.props.borderColor,
        borderTopColor : this.props.borderTopColor,
        borderRightColor : this.props.borderRightColor,
        borderLeftColor : this.props.borderLeftColor,
        borderBottomColor : this.props.borderBottomColor,
        color : this.props.textColor
      };
    return(
      <Wrapper ref={(node)=>this.wrapperRef=node}>
        <Button  onClick={() => this.handleClickOpen()} style={styles}>
          {this.props.title || 'Multi Select'}
          <DropIcon style={{color:this.props.iconColor}}>&#9662;</DropIcon>
        </Button>
        {
          display && (
            <DropDown role="menu">
              {this.renderList()}
            </DropDown>
          )
        }
      </Wrapper>
    )
  }
}

const propTypes={
  title : PropTypes.string.isRequired,
  itemList : PropTypes.array.isRequired,
  selectedItemList : PropTypes.array.isRequired,
  changeList : PropTypes.func.isRequired,
  borderRadius : PropTypes.number,
  borderColor : PropTypes.string,
  borderTopColor : PropTypes.string,
  borderRightColor: PropTypes.string,
  borderLeftColor : PropTypes.string,
  borderBottomColor : PropTypes.string,
  textColor : PropTypes.string,
  iconColor : PropTypes.string
}

MultiSelect.propTypes = propTypes;

export default MultiSelect;
