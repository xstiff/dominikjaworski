import Image from 'next/image'
import Logo from '../../assets/vscodelogo.png';
import './TopBar.scss'
import { useState } from 'react';

const TopBarLink = ({name, clickFunc, state, linksObject}: {name: string, clickFunc: () => void, state: string, linksObject: Record<string, ()=>void>}) => {
    return(
        <li className='TopBarLink-li' onClick={() => clickFunc()}>
            {
                state == name.toLowerCase() && (<div className='TopBarLinkDropDown'>
                    {
                            Object.keys(linksObject).map((key) => {
                                const func = linksObject[key];
                                return (
                                    <a key={key} onClick={() => func()} className='TopBarLinkDropDown-a'>
                                        {key}
                                    </a>
                                );
                            })
                        }
                </div>)
            }
            <a className='TopBarLink-a'>
                {name}
            </a>
        </li>
    )
}

const VSCodeLogo = () => {
    return <div className='LogoContainer'>
            <Image alt='VSCodeLogo' src={Logo} width={24} height={24} className="VSCodeLogo"/>
        </div>
    
}


export const TopBar = () => {

    const [selectedLink, setSelectedLink] = useState("");

    const OpenDropDown = (name: string) => {
        if (selectedLink == name.toLowerCase()){
            setSelectedLink("");
        }
        else setSelectedLink(name);
    }

    const fileLinkObject = { 
        "New file": () => {
            alert("newFile")
        }
    }

    const editLinkObject = {
        "Undo": () => {
            alert("undo")
        }
    }


    return(
        <div className="TopBarContainer">
            <VSCodeLogo />
            <ul className='TopBarUl'>
                <TopBarLink name="File" clickFunc={() => OpenDropDown("file")} state={selectedLink} linksObject={fileLinkObject}/>
                <TopBarLink name="Edit" clickFunc={() => OpenDropDown("edit")} state={selectedLink} linksObject={editLinkObject}/>
                {/* <TopBarLink name="Selection"/>
                <TopBarLink name="View"/>
                <TopBarLink name="Go"/>
                <TopBarLink name="Run"/>
                <TopBarLink name="Terminal"/>
                <TopBarLink name="Help"/> */}
            </ul>
            <div className="TopBarNavigation">

            </div>
        </div>
    )
}