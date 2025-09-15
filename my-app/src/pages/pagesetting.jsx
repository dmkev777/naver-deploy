import React, { useState } from 'react'
import './pagesetting.css'

function MotivationalQuotes ({quote, theme, onClick,})
{
  return (<>
  <div className={`${theme} quote-card`} onClick={() => onClick && onClick(quote)}>
  {quote}
  </div>
  </>)
}


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
      <div className={`${theme} theme-div`}>
      <h2 className='settings-header'>Settings</h2>
      <div className='theme-option'>
        <p className={`theme-paragraph ${theme}`}>{`The current theme is ${theme}`}</p>
        {
        isChanging? 
        <>
        <button className='theme-spec' onClick={()=> handleChange("theme-light")}>Light</button>
        <button className='theme-spec' onClick={()=> handleChange("theme-dark")}>Dark</button>
        <button className='theme-spec' onClick={()=> handleChange("theme-pastel")}>Pastel</button>
        </>
        :
        <>
        <button className='theme-spec' onClick={()=> setIsChanging(true)}>edit</button>
        </>
        }
      </div>
      </div>
      
      <form onSubmit={handleQuote} className={`${theme} quote-row`}>
        <div className={`${theme} quote-input-row`}>
        <input
          className={`${theme} quote-bar`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add quote"
        />
        <button className='quote-submit' type="submit">Save Quote</button>
        </div>
        
        <div className={`${theme} quote-example`}>
        <MotivationalQuotes theme={theme} quote={'Dream big. Start small. Act now.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Push yourself, because no one else will.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'The secret of getting ahead is getting started'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Discipline is the bridge between goals and achievement.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Fall seven times, stand up eight.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'You dont have to be great to start, but you have to start to be great.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Stay hungry. Stay foolish.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Do something today that your future self will thank you for.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Make it happen.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Progress, not perfection.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Dont wish for it. Work for it.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Keep going. Youre getting there.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Good things come to those who hustle.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Stay positive. Work hard. Make it happen'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Do it scared.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'The best time to start was yesterday. The next best time is now.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'You are stronger than you think.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Consistency beats motivation.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Success is no accident.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Push harder than yesterday.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Be so good they can’t ignore you.'} onClick={(q) => setText(q)}/>
        <MotivationalQuotes theme={theme} quote={'Fall in love with the process'} onClick={(q) => setText(q)}/>
        </div>
      </form>
    </div>
  )
}

export default Settings