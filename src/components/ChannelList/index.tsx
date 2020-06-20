import React from 'react';
import ChannelButton from '../ChannelButton';

import {Container, Category, AddCategoryIcon} from './styles';

const ChannelList: React.FC = () => {
  return(
   <Container>
     <Category>
       <span>Canais de texto</span>
       <AddCategoryIcon />
     </Category>

     <ChannelButton channelName='chat-free'/>
     <ChannelButton channelName='pipoca_de_forno'/>
     <ChannelButton channelName='csgo'/>
     <ChannelButton channelName='FreeFire2.0'/>
     <ChannelButton channelName='Facul_Sist_Inf'/>
     <ChannelButton channelName='Jogos'/>
      <ChannelButton channelName='AddFriends'/> 
   </Container>
  )
};

export default ChannelList;