import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
  Container,
  UserImage,
  UserDetailCol,
  UserName,
  UserRole,
  UserDescription,
} from './styled';
import Lang from '../../../../lang/en';

const CommunitySection: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (
    selectedIndex: React.SetStateAction<number>,
    e: any
  ) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <UserDetailCol>
            <UserImage />
            <UserName>{Lang.communityMemberName}</UserName>
            <UserRole>{Lang.communityMemberRole}</UserRole>
          </UserDetailCol>
          <Carousel.Caption>
            <UserDescription>{Lang.communitiesMemberDetail}</UserDescription>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <UserDetailCol>
            <UserImage />
            <UserName>{Lang.communityMemberName}</UserName>
            <UserRole>{Lang.communityMemberRole}</UserRole>
          </UserDetailCol>
          <Carousel.Caption>
            <UserDescription>{Lang.communitiesMemberDetail}</UserDescription>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <UserDetailCol>
            <UserImage />
            <UserName>{Lang.communityMemberName}</UserName>
            <UserRole>{Lang.communityMemberRole}</UserRole>
          </UserDetailCol>
          <Carousel.Caption>
            <UserDescription>{Lang.communitiesMemberDetail}</UserDescription>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CommunitySection;
