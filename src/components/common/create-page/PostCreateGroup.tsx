import styled from "styled-components";

interface PostCreateGroupProps {
  title: string;
  children: React.ReactNode;
}

export function PostCreateGroup({ title, children }: PostCreateGroupProps) {
  return (
    <Group>
      <TitleLayout>
        <span className="title">{title}</span>
        <hr />
      </TitleLayout>
      {children}
    </Group>
  );
}

const Group = styled.div`
  margin-bottom: 40px;

  > .flex {
    display: flex;
    justify-content: space-between;
  }
`;

const TitleLayout = styled.div`
  margin: 20px 0;

  .title {
    font-size: 22px;
    font-weight: 500;
    flex-shrink: 0;
    margin-left: 4px;
    height: 42px;
  }

  hr {
    margin: 4px 0;
  }
`;
