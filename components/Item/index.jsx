import React, { useState } from 'react';
import styled from 'styled-components';
import * as apiClient from '../../util/TodoApiClient';

const Card = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
  font-family: 'Lato';
  display:${(props) => (props.active ? 'block' : 'none')};

`;

Card.Header = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
  font-weight: bold;
  text-align: center;
  background-color: pink;
`;

Card.Body = styled.header`
  text-align: center;
`;

Card.DeleteButton = styled.button`
  background-color: pink;
  border-color: tomato;
  color: tomato;
  margin: 1em;
  padding: 0.25em 1em;
  
`;
// TODO: Ao deletar um item é necessário atualizar a página, ver como fazer isso da forma certa
export default function Item(item) {
  const [active, setActive] = useState(true);
  const handleClick = (e) => {
    setActive(!active);
    apiClient.deleteItem(e);
  };
  return (
    <Card active={active}>
      <Card.Header>
        {item.item.title}
      </Card.Header>
      <Card.Body>
        <p>{item.item.description}</p>
        <Card.DeleteButton onClick={
           () => handleClick(item.item.id)
        }
        >
          Delete
        </Card.DeleteButton>
      </Card.Body>
    </Card>
  );
}
