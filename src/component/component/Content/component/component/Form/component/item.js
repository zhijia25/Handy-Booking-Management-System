import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const Input = styled.input`
  border: 1px solid #d9d9d9;
  min-width: 200px;
  margin: 0;
  margin-bottom: ${(props)=> props.theme.gutter.xl};
  border-radius: ${(props)=> props.theme.borderRadius.sm};
  line-height: ${(props)=> props.theme.lineHeight.lg};

  &:hover{
    border: 1px solid ${(props)=> props.theme.color.primary};
  }
`
const Label = styled.label`
  line-height: ${(props)=> props.theme.lineHeight.lg};
`
const Item = ({
  name,
  children,
  type,
  placeholder,
}) =>(
  <Wrapper>
    <Label htmlFor={name}>{children}</Label>
    <Input type={type} name={name} placeholder={placeholder}/>
  </Wrapper>
);

export default Item;