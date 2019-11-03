import React from 'react';
import styles from './multiSelect.css'
import PropTypes from 'prop-types';

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
        <li className="list-item-li" key={item} onClick={ () => this.props.changeList(item, index>-1?false:true) }>
          <input type='checkbox' className="list-item-check" checked={index>-1?true:false} />
          <label className="list-item-label">
            <span className="list-item-span">{item}</span>
          </label>
        </li>
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
      <div ref={(node)=>this.wrapperRef=node} id="multi-select-button">
        <button role="button"
          aria-haspopup="true"
          aria-expanded="true" type="button" className="button"
          onClick={() => this.handleClickOpen()}
          style={styles}
        >
          {this.props.title || 'Multi Select'}
          <span className="drop-icon" style={{color:this.props.iconColor}}>&#9662;</span>
        </button>
        {
          display && (
            <ul role="menu" className="drop-down">
              {this.renderList()}
            </ul>
          )
        }
      </div>
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
