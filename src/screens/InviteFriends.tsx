import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/RootNav';
import styled from 'styled-components/native';
import Contact from '../components/Contact';
import SelectContacts, { ContacInterface } from '../components/SelectContacts/SelectContacts';

type Props = StackScreenProps<RootStackParamList, 'InviteFriends'>;

const CONTACTS: Array<ContacInterface> = [
  { id: '1', name: 'John Doe', checked: false },
  { id: '2', name: 'Jane Smith', checked: false },
  { id: '3', name: 'Bob Johnson', checked: false },
  { id: '4', name: 'Alice Williams', checked: false },
  { id: '5', name: 'John Doe', checked: false },
  { id: '6', name: 'Jane Smith', checked: true },
  { id: '7', name: 'Bob Johnson', checked: false },
];

function InviteFriendsScreen({ navigation }: Props) {
  return (
    <Container>
      <InviteFriendsContainer>
        <InviteFriendsLabel>
          Invite your friends
        </InviteFriendsLabel>
      </InviteFriendsContainer>
      <SelectContacts contacts={CONTACTS} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const InviteFriendsLabel = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #808080;
`;
const InviteFriendsContainer = styled.View`
  margin-top: 16px;
  margin-bottom: 26px;
  padding: 0 16px;
`;
export default InviteFriendsScreen;