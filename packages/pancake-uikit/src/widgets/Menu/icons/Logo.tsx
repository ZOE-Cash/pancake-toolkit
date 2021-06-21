import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFF" : "#345B9D";
  return (
    <>
    <text style={{color:textColor, fontSize:'1.3rem', fontStyle:'bold', fontWeight:'bolder', marginLeft:'0.3rem'}}>
      ZOE SWAP
    </text>
    
  </>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
