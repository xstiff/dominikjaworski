import './LeftSide.scss'
import FileSVG from '@/app/assets/fileSvg'
import SettingsSvg from '@/app/assets/settingsSvg'
import UserSVG from '@/app/assets/userSvg'
import SearchSVG from '@/app/assets/searchSvg'
import { useDispatch, useSelector } from 'react-redux'
import { interfaceSliceType,  choseNav } from '@/app/slices/interfaceSlice'
import { RootState } from '@/app/store/store'
import React from 'react'
import { ExplorerWindow } from './ExplorerWindow/ExplorerWindow'
import { SearchWindow } from './SearchWindow/SearchWindow'

// 
type IconsInContainerType = {
    children: React.ReactNode
    clickFunc?: ()=> void
    activeIconNumber?: interfaceSliceType['currentlyChosenNav']
    selector?: RootState['interface']
    marginAuto?: Boolean
}
const IconsInContainer = ({children, clickFunc, activeIconNumber, selector, marginAuto}: IconsInContainerType)  => {
    return(
        <div onClick={clickFunc} style={marginAuto ? { marginTop: 'auto' } : {}} className={activeIconNumber && selector ? (`LeftSideIconContainer ${selector.currentlyChosenNav === activeIconNumber ? 'active' : ''}`) : ("LeftSideIconContainer")}>
            {children}
        </div>
    )
}
// 

export const LeftSide = () => {
    const dispatch = useDispatch();
    const interfaceState = useSelector((state: RootState)  => state.interface)
    
    const choseMe = (num: interfaceSliceType['currentlyChosenNav'] ) => {
        dispatch(choseNav(num))
    }

    return(
        <div className="LeftSideContainer">
            <div className="LeftSideNavigation">
                <IconsInContainer clickFunc={() => {choseMe(1)}} selector={interfaceState} activeIconNumber={1}>
                    <FileSVG className="UserSVG"/>
                </IconsInContainer>
                <IconsInContainer clickFunc={() => {choseMe(2)}} selector={interfaceState} activeIconNumber={2}>
                    <SearchSVG className="UserSVG"/>
                </IconsInContainer>
                <IconsInContainer clickFunc={() => {}} marginAuto={true}>
                    <UserSVG className="UserSVG" />
                </IconsInContainer>
                <IconsInContainer clickFunc={() => {}}>
                    <SettingsSvg className="SettingsSVG" />
                </IconsInContainer>
            </div>
                {interfaceState.currentlyChosenNav === 1 && <ExplorerWindow />}
                {interfaceState.currentlyChosenNav === 2 && <SearchWindow />}
        </div>
    )
}