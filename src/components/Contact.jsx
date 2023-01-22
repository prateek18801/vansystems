import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
            <div className="contact__container">
                <h1>Contact Us</h1>
                <div className="contact__container-content">
                    <div className="contact__section-form">
                        <p>Drop us a message,</p>
                        <form action={`${process.env.HOST_NAME}/contact`} method="POST">
                            <input type="text" name="name" id="name" placeholder="Name*" />
                            <input type="email" name="email" id="email" placeholder="Email*" />
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message*"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="contact__section-reach">
                        <p>Email us at,</p>
                        <p>support@vansystems.co.in</p>
                        <br />
                        <p> Phone:</p>
                        <p>+91 87261 27335</p>
                        <p>+91 94156 84592</p>
                        <br />
                        <p>Opens:</p>
                        <p>Monday - Saturday</p>
                        <p>from 10 am to 8 pm</p>
                    </div>
                    <div className="contact__section-map">
                        <p><b>Address :</b> Shop No 10 & 12, Ground Floor, Waris Plaza, Vidhan Sabha Marg, Husainganj, Lucknow, Uttar Pradesh 226001</p>
                        <iframe className="gmap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14239.959354351779!2d80.9360326!3d26.8402755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc967c2059c75849e!2sVAN%20Systems!5e0!3m2!1sen!2sin!4v1674374205957!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
