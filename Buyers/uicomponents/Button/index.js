import React from "react";
import buttonStyles from "./quickbuy-button.scss";
export default function QuickbuyActionButton({ children, ...props }) {
return (
<button className={buttonStyles.quickbuyActionButton} {...props}>
{children}
</button>
);
}