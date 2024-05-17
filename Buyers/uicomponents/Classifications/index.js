import React from "react";
import Link from "next/link";
import QuickbuyHelpIcon from "@/icons/quickbuy-help";
const QuickbuySidebarCategory = ({ name, link, emoji }) => {
  return (
    <li className="quickbuy-sidebar-category">
      <Link href={link || "/"}>
        <a className="quickbuy-sidebar-category-link">
          <span className="quickbuy-sidebar-category-emoji">{emoji}</span>
          <span className="quickbuy-sidebar-category-name">{name}</span>
        </a>
      </Link>
    </li>
  );
};
const QuickbuySidebarHelp = () => {
  return (
    <div className="quickbuy-sidebar-help">
      <div className="quickbuy-sidebar-help-icon">
        <QuickbuyHelpIcon width={18} height={18} />
      </div>
      <span className="quickbuy-sidebar-help-text">Quickbuy Help Center</span>
    </div>
  );
};
export default function QuickbuySidebar() {
  return (
    <div className="quickbuy-sidebar">
      <h2 className="quickbuy-sidebar-title">Explore Quickbuy</h2>
      <ul className="quickbuy-sidebar-categories">
        <QuickbuySidebarCategory name="New Arrivals" emoji="⚡" link="/" />
        <QuickbuySidebarCategory
          name="Apparel"
          emoji="👚"
          link="/category/Apparel"
        />
        <QuickbuySidebarCategory
          name="Footwear"
          emoji="👠"
          link="/category/Footwear"
        />
        <QuickbuySidebarCategory
          name="Accessories"
          emoji="👜"
          link="/category/Accessories"
        />
        <QuickbuySidebarCategory
          name="Sports"
          emoji="🤸"
          link="/category/Sporting_Goods"
        />
        <QuickbuySidebarCategory
          name="Beauty"
          emoji="🎁"
          link="/category/Personal_Care"
        />
        <QuickbuySidebarCategory
          name="Home & Living"
          emoji="🏡"
          link="/category/Home"
        />
      </ul>
      <QuickbuySidebarHelp />
    </div>
  );
}
