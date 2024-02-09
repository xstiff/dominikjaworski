'use client'
import { useDispatch, useSelector } from "react-redux";
import { changeVisible } from "./slices/interfaceSlice";
import { RootState } from "./store/store";
import { TopBar } from "./components/TopBar/TopBar";
import { Middle } from "./components/Middle/Middle";

export default function Home() {

  const selector = useSelector( (State: RootState) => State.interface)
  const dispatch = useDispatch();
  // const changeVisibility = () => dispatch(changeVisible());

  return (
    <div className="main-container">
      <TopBar/>
      <Middle />
      {/* <button onClick={changeVisibility}> Dispatch </button>
      {selector.isVisible ? <>Hello</> : <></>} */}
    </div>
  );
}
