import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Card = styled.View`
  width: 86%;
  height: 92%;
  border-radius: 9px;
  background-color: white;
  shadow-color: #bbc9cd;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.8;
  shadow-radius: 10px;
  align-self: center;
`;
export const Info = styled.View`
  flex-direction: row;
  width: 210px;
`;

export const TextInfo = styled.Text`
  padding: 12px 0;
  color: #3a547c;
  font-size: 16px;
`;

export const TextTitle = styled.Text`
  padding: 12px 0;
  margin-left: 30px;
  margin-right: 5px;
  color: #3a547c;
  font-size: 16px;
  font-weight: bold;
`;

export const Column = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.Text`
  padding: 6% 9%;
  color: #3a547c;
  font-weight: bold;
  font-size: 20px;
`;

export const Hr = styled.View`
  height: 1.5px;
  background-color: #e2eff3;
  margin-bottom: 3%;
`;

export const Foot = styled.Text`
  align-self: center;
  justify-content: flex-end;
  color: #3a547c;
  font-size: 16px;
`;

export const BtnFirma = styled.TouchableOpacity`
  background-color: #3a547c;
  width: 135px;
  height: 40px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  margin-top: 15px;
`;

export const FirmaTxt = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

export const Cancelar = styled.TouchableOpacity`
  align-self: flex-start;
  background-color: #b0b0b0;
  width: 50%;
  height: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
`;
export const Confirmar = styled.TouchableOpacity`
  align-self: flex-end;
  background-color: #3a547c;
  width: 50%;
  height: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
`;

export const ButtonTxt = styled.Text`
  color: white;
  font-size: 17px;
`;

export const Wrapper = styled.TouchableOpacity`
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`;

export const WrapperExt = styled.TouchableOpacity`
  width: 100%;
  height: 35px;
  margin-left: 30px;
  padding: 0 15px;
  background-color: #e7e7e7;
  justify-content: center;
  align-items: flex-start;
`;
export const TitleContainer = styled.View`
  border-radius: 6px;
  width: 95%;
  height: 100%;
  margin-left: 20px;
  padding: 0 15px;
  justify-content: center;
`;

export const StateTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const States = styled.Text`
  font-size: 14px;
  color: #3a547c;
`;

export const Ir = styled.Text`
  padding: 12px 0;
  margin-left: 4px;
  color: #3a547c;
  font-size: 16px;
  font-weight: bold;
`;

export const GMaps = styled.TouchableOpacity``;
