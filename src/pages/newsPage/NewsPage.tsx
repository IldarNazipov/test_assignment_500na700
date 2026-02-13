import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import type { NewsItem } from '@/types/newsItem';
import styles from './newsPage.module.scss';

export const NewsPage = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/news.json');
        const data: NewsItem[] = await response.json();

        const found = data.find((item) => item.id === Number(id));
        setNewsItem(found || null);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, [id]);

  if (!newsItem) return <p>Новость не найдена</p>;

  return (
    <div className={styles.newsPage}>
      <img
        className={styles.image}
        src={
          new URL(`../../assets/images/${newsItem.image}`, import.meta.url).href
        }
        alt=''
        width={440}
        height={320}
      />
      <div className={styles.newsText}>
        <div className={styles.header}>
          <h1 className={styles.title}>{newsItem.title}</h1>
          <span className={styles.date}>{newsItem.date}</span>
        </div>
        <div className={styles.body}>
          <h2 className={styles.subtitle}>{newsItem.subtitle}</h2>
          <p className={styles.text}>{newsItem.text}</p>
        </div>
      </div>
    </div>
  );
};
