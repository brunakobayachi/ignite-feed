import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/jaguar727.png",
            name: "Diego Yuri",
            role: "Web Development Student",
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            {
                type: "paragraph",
                content:
                    "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            { type: "link", content: "👉 jane.design/doctorcare" },
        ],
        publishedAt: new Date("2022-10-22 20:00:00"),
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/neofrosch.png",
            name: "Isabella Kobayachi",
            role: "Web Development Student",
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            {
                type: "paragraph",
                content:
                    "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            { type: "link", content: "👉jane.design/doctorcare" },
        ],
        publishedAt: new Date("2022-10-24 20:00:00"),
    },
];

export function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <aside>
                    <Sidebar />
                </aside>
                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                key={posts.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        );
                    })}
                </main>
            </div>
        </div>
    );
}
