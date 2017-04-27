import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;;
  padding: 0;
  list-style: none;
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  li{
    width: 100%;
    height: 100%;
    margin: 0 10px;
    flex: 1;
    &:first-of-type{
      margin: auto;
      margin-left: 15px;
    }
    &:last-of-type{
      margin: auto;
      margin-right: 15px;
    }
    a{
      color: inherit;
      font-size: 25px;
      width: 100%;
      height: 100%;
      min-width: 50px;
      min-height: 50px;
      cursor: pointer;
      transition: 0.3s;
      border-bottom: 2px solid rgba(0,0,0,0);
      padding: 5px 10px;
      &:hover{
        color: #999;;
        border-bottom: 2px solid #999;
      }
    }
  }
`;

const About = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 20px;
  height: 80px;
  position: absolute;
  justify-content: center;
  left: 0;
  right: 0;
  bottom: 0;
  h2, h3 {
    font-size: 20px;
    margin: 0;
  }
`;

const SocialItem = (props) => {
  return (
    <li key={props.name}><a href={props.link}><FontAwesome name={props.name} /></a></li>
  )
}

const Footer = (props) => {

  return(
    <div>
      <About>
        <h2>React Daily UI</h2>
        <h3>{props.day}</h3>
      </About>
      <List>
        {
          props.links.map(link => {
              if(link.indexOf('https://') === 0){
                const name = link.substr(8).split('/')[0].split('.')[0];
                return( <SocialItem key={name} link={link} name={name}/>)
              }
              if(link.indexOf('http://') === 0){
                const name = link.substr(7).split('/')[0].split('.')[0];
                return <SocialItem key={name} link={link} name={name}/>
              }
              if(link.indexOf('www.') === 0){
                const name = link.substr(4).split('/')[0].split('.')[0];
                return <SocialItem key={name} link={link} name={name}/>
              }
          })
        }
      </List>
    </div>
  )
}


export default Footer;
