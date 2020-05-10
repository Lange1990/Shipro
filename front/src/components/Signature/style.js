import styled from "styled-components/native";

export const ContainerBtn = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const BtnConfirm = styled.TouchableOpacity`
  align-self: flex-end;
  background-color: #3a547c;
  align-items: center;
  width: 50%;
  padding: 6% 0;
`;

export const BtnCancel = styled.TouchableOpacity`
  align-self: flex-end;
  background-color: #bbbbbb;
  width: 50%;
  align-items: center;
  padding: 6% 0;
`;

export const ButtonTxt = styled.Text`
  color: white;
  font-size: 16px;
`;
