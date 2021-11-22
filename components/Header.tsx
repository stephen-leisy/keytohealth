import Nav from './Nav';
import styled from 'styled-components';

const ContainerHeader = styled.div`
  background-color: red;
`;

export default function Header() {
  return (
    <ContainerHeader>
      Header
      <Nav />
    </ContainerHeader>
  );
}
