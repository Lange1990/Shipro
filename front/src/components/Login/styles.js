import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  height: 40px;
  background-color: #e7e7e7;
  margin-bottom: 20px;
  color: #2c3e50;
  width: 280px;
  border-radius: 9px;
  padding-horizontal: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  padding-bottom: 20px;
  color: #000;
`;

export const Button = styled.TouchableHighlight`
  height: 40px;
  background-color: #3a547c;
  width: 280px;
  border-radius: 9px;
  padding-horizontal: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
`;
