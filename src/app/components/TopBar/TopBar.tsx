import Image from 'next/image'
import Logo from '../../assets/vscodelogo.png';
import './TopBar.scss'


const TopBarLink = ({name}: {name: string}) => {
    return(
        <li className='TopBarLink-li'>
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
    return(
        <div className="TopBarContainer">
            <VSCodeLogo />
            <ul className='TopBarUl'>
                <TopBarLink name="File"/>
                <TopBarLink name="Edit"/>
                <TopBarLink name="Selection"/>
                <TopBarLink name="View"/>
                <TopBarLink name="Go"/>
                <TopBarLink name="Run"/>
                <TopBarLink name="Terminal"/>
                <TopBarLink name="Help"/>
            </ul>
            <div className="TopBarNavigation">

            </div>
        </div>
    )
}