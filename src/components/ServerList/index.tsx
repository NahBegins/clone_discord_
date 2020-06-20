import React from 'react'

import ServerButton from '../ServerButton';
import {Container, Separator} from './styles';

const Layout: React.FC = () => {
  return( 
    <Container>
      <ServerButton isHome />
      <Separator />
      <ServerButton mentions={1}/>
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={5}/>
      <ServerButton />
      <ServerButton hasNotifications mentions={2}/>
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
    </Container>
  )
};

export default Layout;