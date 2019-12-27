import React from 'react';
import './App.css';

class Footer extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <footer class="social-footer">
                    <div class="social-footer-left" style={{ display: 'flex' }}>
                        <a href="#"><img class="logo" src='data:image/jpeg;base64,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' style={{ height: 60 }} /></a>
                        <p style={{
                            padding: 13, color: '#0b2a2a', fontWeight: 600,
                            fontFamily: 'monospace'
                        }}>Shubhangi Ambade<i class="fa fa-heart" aria-hidden="true" style={{
                            color: '#912626',
                            padding: 2
                        }}></i></p>
                    </div>
                    <div class="social-footer-icons">
                        <ul class="menu simple">
                            <li><a href="https://www.facebook.com/shubhangi.ambade.5" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.instagram.com/_shubhiii_6897/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="https://mail.google.com" target="_blank"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                            <li><a href="https://twitter.com/shubh_ambade_06" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </footer>
            </div >)
    }
}

export default Footer;

