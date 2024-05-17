import React from "react";
import QuickbuySortIcon from "@/icons/quickbuy-sort";
const QuickbuyActionButton = ({ type, count, onClick }) => {
return (
<button className="quickbuy-action-button" onClick={onClick}>
{type === "sort" ? (
<div className="quickbuy-action-icon">
<QuickbuySortIcon width={24} />
</div>
) : (
<div className="quickbuy-action-counter">{count}</div>
)}
<span className="quickbuy-action-text">{type === "sort" ? "Sort" : "Filter"}</span>
</button>
);
};
export default QuickbuyActionButton;