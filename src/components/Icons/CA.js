import React from "react";
import { PropTypes } from "prop-types";

const CAIcon = ({ height, width, ...props }) => (
  <svg {...props} height={height} width={width} viewBox="0 0 640 480">
    <g transform="translate(74.118) scale(.9375)">
      <path fill="#fff" d="M81.137 0h362.276v512H81.137z" />
      <path
        fill="#bf0a30"
        d="M-100 0H81.138v512H-100zm543.413 0H624.55v512H443.414zM135.31 247.41l-14.067 4.808 65.456 57.446c4.95 14.764-1.72 19.116-5.97 26.86l71.06-9.02-1.85 71.512 14.718-.423-3.21-70.918 71.13 8.432c-4.402-9.297-8.32-14.233-4.247-29.098l65.414-54.426-11.447-4.144c-9.36-7.222 4.044-34.784 6.066-52.178 0 0-38.195 13.135-40.698 6.262l-9.727-18.685-34.747 38.17c-3.796.91-5.413-.6-6.304-3.808l16.053-79.766-25.42 14.297c-2.128.91-4.256.125-5.658-2.355l-24.45-49.06-25.21 50.95c-1.9 1.826-3.803 2.037-5.382.796l-24.204-13.578 14.53 79.143c-1.156 3.14-3.924 4.025-7.18 2.324l-33.216-37.737c-4.345 6.962-7.29 18.336-13.033 20.885-5.744 2.387-24.98-4.823-37.873-7.637 4.404 15.895 18.176 42.302 9.46 50.957z"
      />
    </g>
  </svg>
);

CAIcon.displayName = "CAIcon";

CAIcon.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

export default CAIcon;
