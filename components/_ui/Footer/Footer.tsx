"use client";

import React from "react";
import Link from "next/link";
import "./footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section footer-brand">
                    <div className="footer-logo">

                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQE2SfU9ykZnSg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710873397915?e=1770854400&v=beta&t=2LXZWZQFBlP_5U801Rmv1S51OQaBMheRKoTRHdgppaA"
                            alt="Brand"
                            className="brand-mark"
                            style={{ width: '60px', height: '55px', borderRadius: '50%' }}
                        />

                        <span className="logo-text">GUILHERME</span>
                    </div>
                    <p className="footer-description">
                        Aplicação moderna com tecnologias de ponta.
                    </p>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Tecnologias</h3>
                    <ul className="footer-links">
                        <li><span>Next.js</span></li>
                        <li><span>React</span></li>
                        <li><span>TypeScript</span></li>
                        <li><span>CSS</span></li>
                        <li><span>Node.js</span></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Contact</h3>
                    <ul className="footer-links footer-social">
                        <li>
                            <a href="mailto:guilhermefernandesouza.dev@gmail.com" className="social-link">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 4L10 11L17 4M3 4H17V16H3V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                guilhermefernandesouza.dev@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/guilherme-souza-/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v5.64z" />
                                </svg>
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/GuiiizeeraSouza" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/guif.souza/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <div className="footer-compliance">
                        <div className="compliance-badges">
                            <div className="badge">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="badge">
                                <div className="gdpr-stars">
                                    <span>★</span>
                                    <span>★</span>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    <div className="footer-copyright">
                        <span>© 2026 Guilherme</span>
                        <span className="footer-tagline">Privacy-first analytics</span>
                    </div>
                </div>
            </div>

            {/* Background Text */}
            <div className="footer-background-text">GUILHERME</div>
        </footer>
    );
};

export default Footer;
