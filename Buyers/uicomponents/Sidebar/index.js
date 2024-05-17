import React from "react";
import styles from "./sidebar.scss";
import Link from "next/link";
import HelpIcon from "@/icons/help";
import { useAuth } from "@/firebase/context";
export default function QuickbuyAccountSidebar() {
const { user } = useAuth();
return (
<div className={styles.container}>
<h2 className={styles.title}>Quickbuy Menu</h2>
  <div className={styles.helpContainer}>
    <div className={styles.helpIcon}>
      <HelpIcon width={18} height={18} />
    </div>
    <span>Quickbuy Help Center</span>
  </div>
</div>

);
}
const QuickbuySidebarLink = ({ title, url, icon }) => {
return (
<li className={styles.sidebarItem}>
<Link href={url || "/quickbuy-account"}>
<a>
<span className={styles.emoji}>{icon}</span>
<span className={styles.categoryName}>{title}</span>
</a>
</Link>
</li>

);
};
