import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
`;

export const Button = styled.button`
  background: white;
  border: 1px solid #675d5d;
  padding: 5px 10px;
  outline: none;
  border-radius: 4px;
  font-weight: 700;
  :hover{
    background: #f3eeee;
    cursor: pointer;
  }
`;

export const DropDown = styled.ul`
  list-style: none;
  min-width: 100px;
  font-size: 16px;
  position: absolute;
  background: white;
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
  border: 1px solid rgba(0,0,0,.15);
  padding: 5px;
  margin: 0;
  text-align: left !important;
`;

export const DropIcon = styled.span`
  font-size: 16px;
  margin-left: 8px;
`;

export const ListItem = styled.li`
  padding: 2px;
  :hover{
    padding : 3px;
    background: #eee;
    cursor: pointer;
  }
`;

export const ItemSpan = styled.span`
  margin-left: 5px;
`;

export const ItemLabel = styled.label`
  cursor: pointer !important;
`;

export const ItemCheck = styled.input`
  cursor: pointer !important;
`;
