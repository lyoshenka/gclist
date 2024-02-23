import styles from "./page.module.css";
import { groups } from "@/data/groups";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Open Warpcast Groups</h1>
      <div className={styles.add}>
        <Link
          className={styles.link}
          href={"https://github.com/lyoshenka/gclist/edit/main/data/groups.ts"}
          target={"_blank"}
        >
          Add your group here
        </Link>
      </div>
      <div className={styles.groups}>
        {groups
          .sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          )
          .map((group) => (
            <div className={styles.group} key={group.name}>
              <div className={styles.groupTop}>
                <div className={styles.nameAndPic}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
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
                      group.requiredNFT.lastIndexOf("/") + 1
                    )}
                  </Link>
                </div>
              )}
            </div>
          ))}
      </div>
      <div className={styles.add}>
        <Link
          className={styles.link}
          href={"https://github.com/lyoshenka/gclist/edit/main/data/groups.ts"}
          target={"_blank"}
        >
          Add your group here
        </Link>
      </div>
      <div className={styles.footer}>
        Made by{" "}
        <Link
          className={styles.link}
          href={"https://warpcast.com/grin"}
          target={"_blank"}
        >
          Grin
        </Link>
        .
      </div>
    </main>
  );
}
