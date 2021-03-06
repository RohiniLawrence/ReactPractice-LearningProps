import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (

        <div className="ui container comments">
            <ApprovalCard>
               Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    avatar={faker.image.avatar()}
                    comment="Great Blog!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:35PM"
                    avatar={faker.image.avatar()}
                    comment="Nice Blog!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 1:20PM"
                    avatar={faker.image.avatar()}
                    comment="Great Job!"
                />
            </ApprovalCard>


        </div>
    );

};
ReactDOM.render(<App />, document.querySelector('#root'))