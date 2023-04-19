import { useState } from 'react';
import styled from 'styled-components/native';
import Input from '../Input';
import InputWithIcon from '../InputWithIcon';
import Button from '../Button';
import EyeIcon from '../../../assets/EyeIcon.svg';

interface Props {
  onSignin: () => void;
}

function SigninForm({ onSignin }: Props) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setError('');
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setError('');
  };

  const handleSignInPress = () => {
    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    onSignin()
  };

  const validateEmail = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };
  
  return (
    <>
      <InputContainer>
        <Input
          placeholder='Email'
          value={email}
          onChangeText={handleEmailChange}
        />
        <InputWithIcon
          icon={EyeIcon}
          placeholder='Password'
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}
        />
        { error && <ErrorLabel>{error}</ErrorLabel>}
        <ButtonContainer>
          <Button primary label='Sign In' onPress={handleSignInPress} />
        </ButtonContainer>
      </InputContainer>
    </>
  );
}

const InputContainer = styled.View`
  padding: 16px;
  flex-direction: column;
  gap: 12px;
`;

const ButtonContainer = styled.View`
  height: 40px;
`

const ErrorLabel = styled.Text`
  color: red;
  font-size: 12px;
  margin-left: 16px;
  margin-top: 4px;
`;

export default SigninForm;