import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Card = styled.View`
  width: 365px;
  height: 610px;
  border-radius: 9px;
  margin-top: 23px;
  background-color: white;
  shadow-color: #bbc9cd;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.8;
  shadow-radius: 10px;
  align-self: center;
`;

export const NroTxt = styled.Text`
  padding: 3% 7%;
  color: #3a547c;
  font-size: 14px;
`;

export const Estado = styled.Text`
  color: #3a547c;
  font-size: 14px;
  font-weight: bold;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  padding: 6%;
  color: #3a547c;
  font-weight: bold;
  font-size: 19px;
`;

export const Hr = styled.View`
  height: 1px;
  background-color: #e2eff3;
  margin-bottom: 5%;
`;

export const Foot = styled.Text`
  align-self: flex-end;
  justify-content: flex-end;
  color: #3a547c;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 75px;
  height: 30px;
  background-color: green;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 20px;
`;

export const ButtonTxt = styled.Text`
  color: white;
  font-size: 13px;
`;

export const Color = styled.View`
  width: 7px;
  height: 7px;
  border-radius: 7px;
  align-self: center;
  margin-right: 4px;
`;

export const SinPedidos = styled.Text`
  font-size: 20px;
  justify-content: center;
  padding-top: 180px;
  text-align: center;
`;
