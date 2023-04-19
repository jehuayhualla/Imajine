import React from 'react';
import { SvgProps } from 'react-native-svg';
import styled from 'styled-components/native';

const ButtonContainer = styled.View<PrimaryElementProps>`
  height: 40px;
  background: ${(props) => (props.primary ? '#ED572F' : '#FDFDFD')};
  border: ${(props) => (props.primary ? 'none' : '1px solid #808080')};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
`;
const ButtonText = styled.Text<PrimaryElementProps>`
  color: ${(props) => (props.primary ? '#FBECE8' : '#808080')};
  font-size: 16px;
  font-weight: bold;
`;
const StyledTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
`;


interface PrimaryElementProps {
  primary?: boolean;
}

interface ButtonProps extends PrimaryElementProps {
  label?: string;
  icon?: React.FC<SvgProps>;
  onPress: () => void;
}

export default function Button({ label, icon: Icon, primary = false, onPress }: ButtonProps) {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <ButtonContainer primary={primary}>
        {Icon && <Icon width={24} height={24} fill={primary ? '#FDFDFD' : '#333'} />}
        {label && <ButtonText primary={primary}>{label}</ButtonText>}
      </ButtonContainer>
    </StyledTouchableOpacity>
  );
}