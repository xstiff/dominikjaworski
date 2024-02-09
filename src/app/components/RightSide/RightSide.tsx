import React, { useState } from 'react';
import './RightSide.scss';


const DefaultEditorText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.\nPorro qui aperiam corrupti distinctio quo quaerat, amet aut quos tenetur soluta exercitationem perspiciatis libero sed vitae eaque expedita sapiente, dolorum voluptatem."


const Top = () => {
    return (
        <div className='RightSideTopContainer'>
            <p>Top</p>
        </div>
    );
};

const Editor = () => {
    const [content, setContent] = useState(DefaultEditorText);
    
    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    const generateLineNumbers = () => {
        const lines = content.split('\n');
        return lines.map((_, index) => <div className='EditorNumbers' key={index}>{index + 1}</div>);
    };

    return (
        <div className='RightSideEditorContainer'>
            {/* <div className='EditorNumbersContainer'>{generateLineNumbers()}</div> */}
            <textarea
                className='EditorArea'
                value={content}
                onChange={handleTextChange}
                spellCheck={false}
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
