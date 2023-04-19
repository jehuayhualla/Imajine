import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Avatar from '../../../assets/Photo.svg';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const Name = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  color: #1C1C1E;
  margin-left: 12px;
  flex: 1;
`;

const Checkbox = styled.View<CheckedInterface>`
  width: 22px;
  height: 22px;
  border: 1px solid #DADADA;
  border-radius: 4px;
  background-color: ${({ checked }) => (checked ? '#ED572F' : '#FDFDFD')};
  margin: 4px;
  align-self: flex-end;
`;

interface CheckedInterface {
  checked: boolean;
}

interface ContactProps extends Partial<CheckedInterface> {
  id: string;
  name: string;
  onCheck: (id: string, checked: boolean) => void;
}
const Contact = ({ id, name, checked = false, onCheck }: ContactProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    onCheck(id, !isChecked);
  };
  return (
    <Container>
      <Avatar width={48} height={48} />
      <Name>{name}</Name>
      <TouchableOpacity onPress={() => handleCheck()} >
        <Checkbox checked={isChecked} />
      </TouchableOpacity>
    </Container>
  );
};

export default Contact;