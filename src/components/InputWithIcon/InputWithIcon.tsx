import styled from 'styled-components/native';
import { SvgProps } from 'react-native-svg';
const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background: #FDFDFD;
  border: 1px solid #DADADA;
  border-radius: 8px;
  padding: 8px;
`;

const InputField = styled.TextInput`
  flex: 1;
  margin-left: 8px;
`;

interface InputWithIconProps extends React.ComponentProps<typeof InputField> {
  icon: React.FC<SvgProps>;
}

export default function InputWithIcon({ icon: Icon, ...rest }: InputWithIconProps) {
  return (
    <InputContainer>
      <InputField {...rest} />
      <Icon width={24} height={24} fill="#DADADA" />
    </InputContainer>
  );
}