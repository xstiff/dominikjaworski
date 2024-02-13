import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './ExplorerWindow.scss'
import { toggleFolder } from '@/app/slices/interfaceSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';



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
    const folderStates = useSelector((state: RootState) => state.interface.folderStates)
    const dispatch = useDispatch()
    const folderT = (folderName: string) => {
        dispatch(toggleFolder(folderName))
    };

    

    return (
        <div className='LeftSideExplorer'>
            <div className='ExplorerHeader'>
                <p>EXPLORER</p>
            </div>
            <div className='ExplorerListContainer'>
                <ExplorerFolder name="Main" isOpen={folderStates["Main"] || false}onToggle={(folderName) => folderT(folderName)}>
                    <ExplorerFolder name="Subfolder 1" isOpen={folderStates["Subfolder 1"] || false} onToggle={(folderName) => folderT(folderName)} depth={3}>
                        <div className='child depth-4'>Child 1</div>
                    </ExplorerFolder>
                    <ExplorerFolder name="Subfolder 2" isOpen={folderStates["Subfolder 2"] || false} onToggle={(folderName) => folderT(folderName)} depth={3}>
                        <div className='child depth-4'>Child 3</div>
                    </ExplorerFolder>
                </ExplorerFolder>
            </div>
        </div>
    );
};
