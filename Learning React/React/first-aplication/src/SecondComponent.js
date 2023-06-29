import React from 'react'

export const SecondComponent = () => {
    const books = ["book1", "book2", "book3"];
    return (
        <div className='second-component'>
            <h2>SecondComponent</h2>

            {books.length > 0 ? (
                <ul>
                    {books.map((book, i) => (
                        <li key={i}>{book}</li>
                    ))}
                </ul>
            ) : (
                <p>Dont have books</p>
            )}


        </div>
    )
}
