import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import type { NewsItem } from '@/types/newsItem';
import styles from './newsPage.module.scss';

type Status = 'loading' | 'success' | 'error';

export const NewsPage = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/news.json');
        const data: NewsItem[] = await response.json();

        const found = data.find((item) => item.id === Number(id));

        setTimeout(() => {
          setNewsItem(found ?? null);
          setStatus(found ? 'success' : 'error');
        }, 500);
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    };

    fetchNews();
  }, [id]);

  return (
    <div className={styles.newsPage}>
      {status === 'loading' && (
        <h1 className={styles.statusTitle}>Загрузка...</h1>
      )}

      {status === 'error' && (
        <h1 className={styles.statusTitle}>Новость не найдена</h1>
      )}

      {status === 'success' && newsItem && (
        <>
          <img
            className={styles.image}
            src={
              new URL(`../../assets/images/${newsItem.image}`, import.meta.url)
                .href
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
        </>
      )}
    </div>
  );
};
