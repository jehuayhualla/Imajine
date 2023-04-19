import React, { memo, useEffect, useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import Button from '../Button';
import Contact from '../Contact';
import Input from '../Input';
import RadioButton from '../RadioButton/RadioButton';

const Container = styled.View`
  height: 150px;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 0 16px;
`;

const RadioContainer = styled.View`
  flex-direction: row;
  padding: 0 16px;
`;

const SearchContainer = styled.View`
  padding: 13px 26px;
`;

const ContactCounterLabel = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #1C1C1E;
  margin-left: 8px;
  padding: 1px 0;
`;

const FlatListContainer = styled.View`
  padding: 0 16px;
`;

const ButtonContainer = styled.View`
  padding: 0 16px;
`;
interface SelectContactProps{
  contacts: Array<ContacInterface>;
}
export interface ContacInterface {
  id: string;
  name: string;
  checked: boolean;
}

const SelectContacts = ({ contacts }: SelectContactProps) => {
  const filterContacts = contacts.filter((item) => item.checked).map((item) => item.id);
  const [selectedContacts, setSelectedContacts] = useState<Array<String>>(filterContacts);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const MemoFlatList = memo(() => <FlatList
    style={{ flex: 1, marginLeft: 24, marginRight: 24 }}
    data={contacts}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
  />);

  const handleSelectAll = (e: boolean) => {
    setSelectAll(e);
    if (!e) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(contacts.map((item) => item.id));
    }
  };

  const handleContactCheck = (id: string) => {
    const index = selectedContacts.indexOf(id);
    if (index > -1) {
      setSelectedContacts(selectedContacts.filter((item) => item !== id));
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  const renderItem = ({ item }: { item: ContacInterface }) => (
    <Contact
      id={item.id}
      name={item.name}
      checked={selectedContacts.includes(item.id)}
      onCheck={() => handleContactCheck(item.id)}
    />
  );
  return (
    <>
    <Container>
      <RadioContainer>
        <RadioButton label='Select all' onPress={handleSelectAll} />
        <ContactCounterLabel>({selectAll ? contacts.length: '000'})</ContactCounterLabel>
      </RadioContainer>
      <SearchContainer>
        <Input placeholder='Search' />
      </SearchContainer>
      <ButtonContainer>
        <Button primary label='Send Invite' onPress={()=>{}} />
      </ButtonContainer>
      
    </Container>
    <MemoFlatList />
    </>
  );
};

export default SelectContacts;