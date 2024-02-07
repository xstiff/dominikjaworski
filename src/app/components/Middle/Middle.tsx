import { LeftSide } from "../LeftSide/LeftSide"
import { RightSide } from "../RightSide/RightSide"
import "./Middle.scss";

export const Middle = () => {
    return(
        <div className="MiddleContainer">
            <LeftSide />
            <RightSide />
        </div>
    )
}