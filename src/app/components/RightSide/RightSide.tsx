import React, { useEffect, useState } from 'react';
import './RightSide.scss';


const DefaultEditorText = "This web app is not ready for mobile devices *yet*\nLorem ipsum dolor sit amet consectetur adipisicing elit.\nPorro qui aperiam corrupti distinctio quo quaerat, amet aut quos tenetur\n soluta exercitationem perspiciatis libero sed vitae eaque expedita sapiente, dolorum voluptatem."


const Top = () => {
    return (
        <div className='RightSideTopContainer'>
            <p>Top</p>
        </div>
    );
};

const Editor = () => {
    const [content, setContent] = useState(DefaultEditorText);
    const [lineCount, setLineCount] = useState(DefaultEditorText.split('\n').length+1);

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value;
        const LineNumber = (text.split('\n').length+1);
        setContent(text);
        setLineCount(LineNumber);
    };

    return (
        <div className='RightSideEditorContainer'>
            <div className='EditorNumbersContainer'>
                {Array.from({length: lineCount}).map((_, index) => (
                    <span key={index}></span>
                ))}
            </div>
            <textarea
                className='EditorArea'
                value={content}
                onChange={handleTextChange}
                spellCheck={false}
                wrap={"off"}
            />
        </div>
    );
};

export const RightSide = () => {
    return (
        <div className='RightSideContainer'>
            <Top />
            <Editor />
        </div>
    );
};
