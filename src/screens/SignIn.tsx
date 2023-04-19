import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/RootNav';
import styled from 'styled-components/native';
import Input from '../components/Input';
import InputWithIcon from '../components/InputWithIcon';
import Button from '../components/Button';

import EyeIcon from '../../assets/EyeIcon.svg';
import FacebookIcon from '../../assets/FacebookIcon.svg';
import GoogleIcon from '../../assets/GoogleIcon.svg';
import TwitterIcon from '../../assets/TwitterIcon.svg';
import RedditIcon from '../../assets/RedditIcon.svg';
import AppleIcon from '../../assets/AppleIcon.svg';
import Logo from '../../assets/Logo.svg';
import SigninForm from '../components/SigninForm';


type Props = StackScreenProps<RootStackParamList, 'Signin'>;


function SigninScreen({ navigation }: Props) {
  const handleSignin = () => {
    navigation.navigate('Home');
  }
  return (
    <Container>
      <LogoContainer>
        <Logo width={161} height={19.5} fill="#EC7656"/>
      </LogoContainer>
      <SigninLabelContainer>
        <SigninLabel>
          Sign in
        </SigninLabel>
      </SigninLabelContainer>
      <SigninInfoLabelContainer>
        <SigninInfoLabel>
          SIGN IN WITH YOUR EMAIL ADDRESS
        </SigninInfoLabel>
      </SigninInfoLabelContainer>
      <SigninForm onSignin={handleSignin} />
      <SocialAccountContainer >
        <SocialAccountLabel>
          CONTINUE WITH A SOCIAL ACCOUNT
        </SocialAccountLabel>
        <RowContainer>
          <Button icon={FacebookIcon} onPress={() => {}} />
          <Button icon={GoogleIcon} onPress={() => {}} />
          <Button icon={TwitterIcon} onPress={() => {}} />
          <Button icon={RedditIcon} onPress={() => {}} />
        </RowContainer>
        <ButtonContainer>
          <Button icon={AppleIcon} label='Apple ID' onPress={() => {}} />
        </ButtonContainer>
      </SocialAccountContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 24px;
`;
const SigninLabelContainer = styled.View`
  padding: 6px 24px;
  margin-bottom: 20px;
`;
const SigninLabel = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #232323;
`;
const SigninInfoLabel = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #555555;
`;
const SigninInfoLabelContainer = styled.View`
  padding: 5px 20px;
`;
const InputContainer = styled.View`
  padding: 16px;
  flex-direction: column;
  gap: 12px;
`;
const SocialAccountContainer = styled.View`
  padding: 16px;
  flex-direction: column;
  gap: 12px;
`;
const SocialAccountLabel = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #555555;
  padding: 4px;
`;
const RowContainer = styled.SafeAreaView`
  width: 100%;
  height: 40px;
  flex-direction: row;
  gap: 8px;
`;

const ButtonContainer = styled.View`
  height: 40px;
`


export default SigninScreen;