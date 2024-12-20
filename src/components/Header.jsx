import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header(props) {
    return (
        <header>
            <h1><HighlightIcon />{props.title}</h1>
        </header>
    );
}

export default Header;