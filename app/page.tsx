import styles from "./page.module.css";
import { groups } from "@/data/groups";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Open Warpcast Groups</h1>
      <div className={styles.groups}>
        {groups.map((group) => (
          <div className={styles.group} key={group.name}>
            <div className={styles.groupTop}>
              <div className={styles.nameAndPic}>
                <img
                  src={group.image}
                  alt={group.name}
                  width={40}
                  height={40}
                />
                <div className={styles.name}>{group.name}</div>
              </div>
              <div className={styles.join}>
                <Link className={styles.link} href={group.inviteLink}>
                  Join
                </Link>{" "}
              </div>
            </div>
            <div className={styles.description}>{group.description}</div>
            {group.requiredNFT && (
              <div className={styles.requiredNFT}>
                Requires{" "}
                <Link
                  className={styles.link}
                  href={group.requiredNFT}
                  target={"_blank"}
                >
                  {group.requiredNFT.substring(
                    group.requiredNFT.lastIndexOf("/") + 1,
                  )}
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        Made by{" "}
        <Link className={styles.link} href={"https://warpcast.com/grin"}>
          Grin
        </Link>
        .
      </div>
    </main>
  );
}
