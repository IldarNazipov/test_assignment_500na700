import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import styles from './mainContent.module.scss';
import type { NewsItem } from '@/types/newsItem';

export const MainContent = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/news.json');
        const data = await response.json();

        setTimeout(() => {
          setNews(data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>Загрузка...</h1>
      </main>
    );
  }

  return (
    <main className={styles.mainContent}>
      <h1 className={styles.mainTitle}>Новости</h1>
      <ul className={styles.newsList}>
        {news.map((item) => (
          <li key={item.id}>
            <NavLink to={`/news/${item.id}`} className={styles.newsItem}>
              <img
                className={styles.newsImage}
                src={
                  new URL(`../../assets/images/${item.image}`, import.meta.url)
                    .href
                }
                alt=''
                width={440}
                height={320}
              />
              <div className={styles.description}>
                <h2 className={styles.newsTitle}>{item.title}</h2>
                <p className={styles.newsText}>{item.preview}</p>
              </div>
              <span className={styles.newsDate}>{item.date}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};
