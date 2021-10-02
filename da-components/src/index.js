import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = ()=>{
    return (
    <div className = "ui container comments">
        <CommentDetail 
            author="Sam" 
            message="Nice Blog!" 
            createdTime="Yesterday 10:20AM"
        />
        <CommentDetail 
            author="Alex" 
            message="wonderful post!" 
            createdTime="Today 10:00AM"
        />
        <ApprovalCard>
            <CommentDetail 
                author="Jane"
                message="excellent post!" 
                createdTime="July 07, 2021 11:00AM"
            />
        </ApprovalCard>
        <ApprovalCard>
            <h4>Warning!</h4>
            Are you sure you want to do this?
        </ApprovalCard>
    </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));