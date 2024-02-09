import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './ExplorerWindow.scss'

type FolderProps = {
    children: React.ReactNode;
    depth?: number;
    isBold?: boolean;
    name: string;
    isOpen: boolean;
    onToggle: (folderName: string) => void;
};
const ExplorerFolder: React.FC<FolderProps> = ({ children, depth = 1, isBold = false, name, isOpen, onToggle }) => {
    const toggleFolder = () => {
        onToggle(name);
    };

    return (
        <div className='ExplorerFolder'>
            <div className={`ExplorerFolderName depth-${depth}`} onClick={toggleFolder}>
                <p style={isBold ? { fontWeight: "700" } : {}}>
                    {isOpen ? (<FontAwesomeIcon icon={faAngleRight} style={{rotate:'90deg'}}/>) : (<FontAwesomeIcon icon={faAngleRight}/>)} {name}
                </p>
            </div>
            {isOpen && children && <div className='ExplorerFolderChildren'>{children}</div>}
        </div>
    );
};

export const ExplorerWindow: React.FC = () => {
    const [folderStates, setFolderStates] = useState<{ [key: string]: boolean }>({});

    const toggleFolder = (folderName: string) => {
        setFolderStates(prevStates => ({
            ...prevStates,
            [folderName]: !prevStates[folderName]
        }));
    };

    return (
        <div className='LeftSideExplorer'>
            <div className='ExplorerHeader'>
                <p>EXPLORER</p>
            </div>
            <div className='ExplorerListContainer'>
                <ExplorerFolder name="Main" isOpen={folderStates["Main"] || false}onToggle={(folderName) => toggleFolder(folderName)}>
                    <ExplorerFolder name="Subfolder 1" isOpen={folderStates["Subfolder 1"] || false} onToggle={(folderName) => toggleFolder(folderName)}>
                        <div className='depth-4'>Child 1</div>
                    </ExplorerFolder>
                    <ExplorerFolder name="Subfolder 2" isOpen={folderStates["Subfolder 2"] || false} onToggle={(folderName) => toggleFolder(folderName)}>
                        <div className='depth-4'>Child 3</div>
                    </ExplorerFolder>
                </ExplorerFolder>
            </div>
        </div>
    );
};
