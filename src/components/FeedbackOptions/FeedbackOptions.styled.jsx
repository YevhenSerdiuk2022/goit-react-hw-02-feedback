import styled from 'styled-components';

export const Div = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  margin: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px; 
  cursor: pointer;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.muted};

 &:hover,
 &:focus{
    background-color: ${p => p.theme.colors.secondary};
  }
`;