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
                    <div class="social-footer-left">
                        <a href="#"><img class="logo" src="https://placehold.it/150x30" /></a>
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

