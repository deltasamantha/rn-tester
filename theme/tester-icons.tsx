import {createIcon, Icon} from "native-base";
import {G, Path, SvgXml} from "react-native-svg";
import {InterfaceIconProps} from "native-base/lib/typescript/components/primitives/Icon/types";

export const BackIcon = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <Path
      d="M13.0666 3.76375L6.43395 10.3964L5.58039 11.25H6.7875H21.5V12.75H6.7875H5.58192L6.43363 13.6032L13.0557 20.2372L12 21.2929L2.70711 12L12.0012 2.70586L13.0666 3.76375Z"
      fill="currentColor"
      stroke="currentColor"
    />
  ),
});

export const ChevronRight = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <Path
      fill="currentColor"
      d="M6.5 3.77141L14.8785 12.0027L6.50268 20.2314L8.30293 22L18.5 12L8.30293 2L6.5 3.77141Z"
    />
  ),
});

export const ChevronLeft = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <Path
      fill="currentColor"
      d="M18.5 3.77141L10.1215 12.0027L18.4973 20.2314L16.6971 22L6.5 12L16.6971 2L18.5 3.77141Z"
    />
  ),
});

export const ChevronDown = (props: InterfaceIconProps) => {
  return (
    <Icon {...props} viewBox="0 0 24 24">
      <Path
        d="M12,17c-0.207,0-0.413-0.063-0.588-0.191l-11-8l1.177-1.617L12,14.764l10.412-7.572l1.177,1.617l-11,8 C12.413,16.937,12.207,17,12,17z"
        fill="currentColor"
      />
    </Icon>
  );
};
export const RightJoinCircleLarge = (props: InterfaceIconProps) => {
  return (
    <Icon {...props} viewBox="0 0 247 493">
      <SvgXml
        xml={`<svg width="247" height="493" viewBox="0 0 247 493" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M246.5 0C181.124 -7.79599e-07 118.426 25.9705 72.1982 72.1982C25.9705 118.426 5.71534e-06 181.124 0 246.5C-5.71534e-06 311.876 25.9704 374.574 72.1982 420.802C118.426 467.03 181.124 493 246.5 493L246.5 246.5L246.5 0Z" fill="#81D7FF"/>
                <path d="M246.5 0C203.402 -5.13935e-07 162.07 17.1205 131.595 47.5951C101.12 78.0698 84 119.402 84 162.5C84 205.598 101.12 246.93 131.595 277.405C162.07 307.88 203.402 325 246.5 325L246.5 162.5L246.5 0Z" fill="#A1E1FF"/>
            </svg>`}
      />
    </Icon>
  );
};
