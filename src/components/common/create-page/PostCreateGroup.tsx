import * as styled from './PostCreateGroup.styled';

interface PostCreateGroupProps {
  title: string;
  children: React.ReactNode;
}

export function PostCreateGroup({ title, children }: PostCreateGroupProps) {
  return (
    <styled.Group>
      <styled.TitleLayout>
        <span className="title">{title}</span>
        <hr />
      </styled.TitleLayout>
      {children}
    </styled.Group>
  );
}
