import React, { useState } from 'react';
import Book from "../components/Book";

function Props() {
    const [books, setBooks] = useState({id: 1, name: "uhuy"});

  return (
    <div>
        <Book books={books} />
    </div>
  )
}

export default Props