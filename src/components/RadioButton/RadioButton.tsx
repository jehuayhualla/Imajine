import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 16px;
  margin-left: 8px;
`;

const RadioContainer = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid #ED572F;
  align-items: center;
  justify-content: center;
`;

const Radio = styled.View<CheckedInterface>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ checked }) => (checked ? '#ED572F' : '#FDFDFD')};
`;

interface CheckedInterface {
  checked: boolean;
}

interface RadioButtonProps extends Partial<CheckedInterface>{
  label: string;
  onPress: (checked: boolean) => void;
}

const RadioButton = ({ label, checked = false, onPress }: RadioButtonProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    onPress(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handleCheck}>
      <Container>
        <RadioContainer>
          <Radio checked={isChecked} />
        </RadioContainer>
        <Label>{label}</Label>
      </Container>
    </TouchableOpacity>
  );
};

export default RadioButton;