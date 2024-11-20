import React from "react";

/**
 * Footer component.
 * @returns {JSX.Element} Footer element.
 */
function Footer(props) {
    return (
        <footer>
            <p>Copyright &copy; {props.date}</p>
        </footer>
    );
}


export default Footer