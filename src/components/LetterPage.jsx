import React from 'react';
import ProgressBar from './ProgressBar';
function LetterPage(){
    return (
        <div className='grad-page-body'>
            <h1 className='text-6xl font-bold tracking-tight'> Lydia, Welcome to Loyola!</h1>
            <h3 className='text-3xl font-medium pt-8 subheading pb-18'>Access your decision letter and Post Admit Portal.</h3>
            <ProgressBar/>
        </div>
    )
}

export default LetterPage;