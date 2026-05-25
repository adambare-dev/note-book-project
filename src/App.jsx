
import React from 'react'
import Note_book from './Note-book-app'

function App() {
  return (
    <div>
      <div className='Layout'>
        <Note_book />
        <footer>
          <p style={{color: "white"}}>&lt; &lt; &copy; My note book {new Date().getFullYear()} project &gt;&gt;</p>
        </footer>
      </div>

    </div>
  )
}

export default App