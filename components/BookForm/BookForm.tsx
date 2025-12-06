import React from 'react';
import css from './BookForm.module.css';

const BookForm = () => {

    const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Thank you for booking! We will contact you soon.');
    }

    return (
        <div className={css.container}>
            <div className={css.textWrapper}>
                <h3 className={css.title}>
                    Book your campervan now
                </h3>
                <p className={css.subtitle}>
                    Stay connected! We are always ready to help you.
                </p>
            </div>
            <form className={css.form} onSubmit={handleSumbit}>
                <input type="text" required className={css.input} placeholder='Name*'/>
                <input type="email" required className={css.input} placeholder='Email*'/>
                <input 
                type="text" 
                required 
                className={`${css.input} ${css.date}`} 
                placeholder='Booking date*' 
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => {
                    if (!e.target.value) e.target.type = 'text';
                }}
                />
                <textarea className={css.textarea} placeholder='Comment' />
                <button type="submit" className={css.button}>Send</button>
            </form>
        </div>
    )
}

export default BookForm;