import styled from 'styled-components/native';
import Logo from '../../../assets/Logo.svg';
import SearchIcon from '../../../assets/SearchIcon.svg';
import AlarmIcon from '../../../assets/AlarmIcon.svg';
import HamburguerIcon from '../../../assets/HamburgerIcon.svg';

const Container = styled.View`
  height: 64px;
  background: #FDFDFD;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 26px;
`;

export default function Header() {
  return (
    <Container>
      <Logo width={118} height={14} fill="#DF5A36" />
      <IconsContainer>
        <SearchIcon width={22} height={22} fill="#808080" />
        <AlarmIcon width={22} height={22} fill="#808080" />
        <HamburguerIcon width={22} height={22} fill="#808080" />
      </IconsContainer>
    </Container>
  );
}