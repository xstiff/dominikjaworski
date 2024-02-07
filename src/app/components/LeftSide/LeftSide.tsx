import Image from 'next/image'
import './LeftSide.scss'
import FileSVG from '@/app/assets/fileSvg'
import SettingsSvg from '@/app/assets/settingsSvg'
import UserSVG from '@/app/assets/userSvg'




export const LeftSide = () => {
    
    return(
        <div className="LeftSideContainer">
            <div className="LeftSideNavigation">
                <FileSVG className="FileSvg" />
                <UserSVG className="UserSVG" />
                <SettingsSvg className="SettingsSVG" />
                
            </div>
            <p>Left side</p>
        </div>
    )
}