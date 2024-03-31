import styled, { css } from "styled-components";
import { colors } from "./colors";

export const Title = styled.h4`
  font-size: 28px;
  margin-bottom: 16px;
  color: ${colors.yellow1};
  text-align: center;
  font-weight: 400;
`;

export const Container = styled.section<{
  $backgroundColor: string;
  $padding?: string;
}>`
  width: 100%;
  background-color: ${(props) => props.$backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.$padding ?? "60px 20px"};
`;

const buttonStyle = css`
  font-size: 16px;
  padding: 10px;
  color: ${colors.brightYellow8};
  background-color: ${colors.yellow1};
  margin: 20px auto 0;
`;

export const ButtonLink = styled.a`
  ${buttonStyle}
`;

export const Button = styled.button`
  ${buttonStyle}
`;
