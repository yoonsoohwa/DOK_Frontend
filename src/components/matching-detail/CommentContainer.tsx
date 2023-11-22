import {styled} from 'styled-components';
import { CommentInput } from './CommentInput';
import { CommentItem } from './CommentItem';

export function CommentContainer() {
    return (
        <CommentLayout>
            <CommentInput />
            <CommentItem />
            <CommentItem commentType='reply'/>
        </CommentLayout>
    )
}

const CommentLayout = styled.div`
    max-width: 900px;
    padding: 2vw 4vw;
    margin: 0 auto;
    box-sizing: border-box;
    border-top: solid #c0c0c0 1px;
    border-bottom: solid #c0c0c0 1px;
`