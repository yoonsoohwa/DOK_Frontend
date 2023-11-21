import {styled} from 'styled-components';
import { CommentInput } from './CommentInput';
import { CommentItem } from './CommentItem';

export function CommentContainer() {
    return (
        <CommentLayout>
            <CommentInput />
            <CommentItem />
        </CommentLayout>
    )
}

const CommentLayout = styled.div`
    padding: 20px 65px;
    margin: 0 80px;
    box-sizing: border-box;
    border-top: solid #c0c0c0 1px;
    border-bottom: solid #c0c0c0 1px;
`