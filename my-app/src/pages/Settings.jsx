import React, { useState } from 'react'
import './Settings.css'



function Settings({theme, setTheme, quote, setQuote}) {
  const [isChanging, setIsChanging] = useState(false);
  const [text, setText] = useState(quote || "");
  const handleChange = (theme) => {
    const newTheme = theme;
    setTheme(newTheme);
    setIsChanging(false);
    localStorage.setItem("appConfig", JSON.stringify({ theme: newTheme }));
  };
  const handleQuote = (e) => {
    e.preventDefault(); // ngăn reload
    setQuote(text); // cập nhật state App
    localStorage.setItem("quoteConfig", JSON.stringify({ quote: text })); // lưu
  };

  return (
    <div className='settings-row'>
      <div className='theme-div'>
      <h2 className='settings-header'>Settings</h2>
      <div className='theme-option'>
        <p className='theme-paragraph'>{`The current theme is ${theme}`}</p>
        {
        isChanging? 
        <>
        <button className='theme-spec' onClick={()=> handleChange("theme-light")}>theme-light</button>
        <button className='theme-spec' onClick={()=> handleChange("theme-dark")}>theme-dark</button>
        <button className='theme-spec' onClick={()=> handleChange("theme-pastel")}>theme-pastel</button>
        </>
        :
        <>
        <button className='theme-spec' onClick={()=> setIsChanging(true)}>edit</button>
        </>
        }
      </div>
      </div>
      
      <form onSubmit={handleQuote} className="quote-row">
        <input
          className="quote-bar"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add quote"
        />
        <button className='quote-submit' type="submit">Save Quote</button>
      </form>
    </div>
  )
}

export default Settings