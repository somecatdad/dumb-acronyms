import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [definition, setDefinition] = useState(undefined);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    fetch(`${process.env.API_URL}/getDefinition/${inputValue}`)
      .then(res => res.json())
      .then(result => setDefinition(result.word));
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Acronym Lookup</title>
        <meta name="description" content="Simple acronym lookup tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <p className={styles.description}>
          Enter an acronym:
        </p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <input type="submit" value="Submit" />
        </form>
        <p className={styles.description}>
          {definition}
        </p>
      </main>

      <footer className={styles.footer}>
        Built with 🍺 in Birmingham, Ala.
      </footer>
    </div>
  )
}
