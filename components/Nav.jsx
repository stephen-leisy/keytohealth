import Link from 'next/link';
import styled from 'styled-components';

const RouterWrapper = styled.div``;

const RouterLinks = styled.ul``;

const RouterLink = styled.li``;

export default function Nav() {
  return <RouterWrapper>
    <RouterLinks>
      <RouterLink>
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
      </RouterLink>
    </RouterLinks>
  </RouterWrapper>;
}
