import { styled } from '#/components/_styled.jsx';

const StyledButton = styled.a`
  display: block;
  height: 25px;
  background: #86bbd8;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  color: #222222;
  font-weight: bold;
  line-height: 25px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  i {
    margin: 0.4rem;
  }
`;

export function Github() {
  return (
    <StyledButton href='https://github.com/mkvlrn/ts-react' target='_blank'>
      <i className='fa-brands fa-github' />
      View on Github
      <i className='fa-solid fa-arrow-up-right-from-square' />
    </StyledButton>
  );
}
