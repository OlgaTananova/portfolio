import './Contact.css';

function Contact() {
    return (
        <section className="content-section contact" id="contact">
            <h2 className="section-heading">Contact</h2>
            <div className='contact__info'>
                <ul className='contact__data contact__data_info'>
                    <p className="contact-heading">Contact me:</p>
                    <li className="contact__data-item contact__data-item_email"><i className='contact__data-icon contact__data-icon_email'></i><a className='contact__data-link' href='mailto:olga.tananova@gmail.com'>olga.tananova@gmail.com</a></li>
                    <li className="contact__data-item"><i className='contact__data-icon contact__data-icon_tel'></i><a className='contact__data-link' href='tel: 747.488.2742'>Call: 747.488.27.42</a></li>
                    <li className="contact__data-item"><i className='contact__data-icon contact__data-icon_telegram'></i><a className='contact__data-link' href='https://t.me/olgatananova' target="_blank">@olgatananova</a></li>
                </ul>
                <div className='contact__data contact__data_social'>
                    <p className='contact-heading'>Social Media:</p>
                    <div className="contact__data-item">
                        <a className="contact__data-link" href='https://github.com/OlgaTananova' target="_blank">
                            <i className="contact__data-social-icon contact__data-social-icon_github"></i>
                        </a>
                        <a className="contact__data-link" href='https://www.linkedin.com/in/olga-tananova-9aba0b237/' target='_blank'>
                            <i className="contact__data-social-icon contact__data-social-icon_linkedIn"></i>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact;
