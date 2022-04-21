import React from 'react';
import './Booking.css'

const Booking = () => {
    return (
        <section class="component">
            <div class="total">
                <h3>TOTAL</h3>
                <p>187,00 €</p>
            </div>
            <div class="credit-card">
                <h2>Credit card</h2>
                <form>
                    <input type="text" placeholder="NAME" />
                    <div class="line"><input type="text" placeholder="CARD" /> <input type="text" placeholder="NUMBER" /> <input type="text" /> <input type="text" /></div>
                    <div class="line">
                        <input class="litle" type="text" placeholder="EXPIRY" />
                        <input class="tall" type="text" placeholder="CCV" />
                    </div>
                    <button type="submit" class="valid-button">PROCEED TO CHECKOUT</button>
                </form>
            </div>
        </section>


    );
};

export default Booking;