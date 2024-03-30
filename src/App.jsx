import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function PostExample() {

  const [ArticleId, setArticleId] = useState("");

  useEffect(() => {
    // POST request using axios inside useEffect React hook
    const article = { title: 'React Hooks POST Request Example' };
    axios.post('https://reqres.in/api/articles', article)
      .then(response => {
        setArticleId(response.data.id);
        console.log("ArticleId=" + response.data.id);
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

}

function App() {

  return (
    <>
      <div>
        <h2>Hello from React!</h2>
        <PostExample/>
      </div>
    </>
  )


}

export default App
