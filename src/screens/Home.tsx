import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/RootNav';
import styled from 'styled-components/native';

import InviteFriends from '../../assets/InviteFriends.svg';
import Button from '../components/Button';

type Props = StackScreenProps<RootStackParamList, 'Home'>;


function HomeScreen({ navigation }: Props) {
  return (
    <Container>
      <TitleContainer>
        <ConnectLabel>
          Connect with your friends
        </ConnectLabel>
      </TitleContainer>
      <DescriptionContainer>
        <DescriptionLabel>
          Invite your friends and grow your followers!
        </DescriptionLabel>
      </DescriptionContainer>
      <InviteFriendsContainer>
        <InviteFriends width={343} height={292} />
      </InviteFriendsContainer>
      <ButtonContainer>
        <Button primary label='Invite friends' onPress={() => { navigation.navigate('InviteFriends') }} />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const ConnectLabel = styled.Text`
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
color: #ED572F;
`;
const TitleContainer = styled.View`
  margin-top: 42px;
  padding: 0 16px;
`;
const DescriptionLabel = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #555555;
`;
const DescriptionContainer = styled.View`
  margin-top: 36px;
  padding: 0 16px;
`;
const InviteFriendsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const ButtonContainer = styled.View`
  height: 40px;
  padding: 0 16px;
  margin-bottom: 16px;
`

export default HomeScreen;