import React, { useState } from 'react'

function Settings({theme, setTheme, quote, setQuote}) {
  const [text, setText] = useState(quote || "");
  const handleChange = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    localStorage.setItem("appConfig", JSON.stringify({ theme: newTheme }));
  };
  const handleQuote = (e) => {
    e.preventDefault(); // ngăn reload
    setQuote(text); // cập nhật state App
    localStorage.setItem("quoteConfig", JSON.stringify({ quote: text })); // lưu
  };
  return (
    <div>
      <div className='theme-div'>
      <h2>Settings</h2>
      <select value={theme} onChange={handleChange}>
        <option value="theme-light">Light</option>
        <option value="theme-dark">Dark</option>
        <option value="theme-pastel">Pastel</option>
      </select>
      </div>
      
      <form onSubmit={handleQuote} className="add-row">
        <input
          className="input-bar"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add quote"
        />
        <button type="submit">Save Quote</button>
      </form>
    </div>
  )
}

export default Settings