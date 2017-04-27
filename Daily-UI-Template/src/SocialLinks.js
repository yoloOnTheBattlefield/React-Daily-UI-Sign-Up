import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';


const List = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  min-width: 800px;
  list-style: none;
`;

const ListItem = styled.li`
  width: 100%;
`;

const Link = styled.a`
  color: black;
  font-size: 20px;
  width: 100%;
  height: 100%;
  span{
    color: black;
    font-size: 20px;
    width: 100%;
    height: 100%;
  }
`;


const SocialItem = (props) => {
  return(
    <li>
      <a href={props.link} target="_blank" ><FontAwesome name={props.name}/></a>
    </li>
  )
}

const SocialLinks = () => {
  const social_links = [
    'https://instagram.com/cristiflorea1110/',
    'https://twitter.com/yoloOnTheBF',
    'https://github.com/yoloOnTheBattlefield',
    'http://codepen.io/yoloonthebf/',
    'https://linkedin.com/in/cristian-florea-396046123/'
  ]

  console.log(social_links)
  return(
    <List>
      {
        social_links.map((link) => {
          if(link.indexOf('https://') === 0){
            const name = link.substr(8).split('/')[0].split('.')[0];
            return (<li>
              <a href={link}><FontAwesome name={name} /></a>
            </li>)
          }
          if(link.indexOf('http://') === 0){
            const name = link.substr(7).split('/')[0].split('.')[0];
            return
              (<li>
                <a href={link}><FontAwesome name={name} /></a>
              </li>)
          }
          if(link.indexOf('www.') === 4){
            const name = link.substr(4).split('/')[0].split('.')[0];
            return <SocialItem link={link} key={name} name={name} />
          }
        })
      }
    </List>
  )
}

export default SocialLinks;
