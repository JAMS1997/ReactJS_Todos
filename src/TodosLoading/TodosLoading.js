import React from 'react';
import './TodosLoading.css'

function TodosLoading(){
    return (
        <div className='LoadingTodo-container'>
            <span
            className='loadingTodo-completeIcon'
            ></span>
            <p className='loadingTodo-text'></p>
            <span className='LoadingTodo-deleteIcon'></span>
        </div>
    );
}

export { TodosLoading };
