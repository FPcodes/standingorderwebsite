import React from "react";
import styles from './Footer.module.css';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footermain}>
        <ul id={styles.signUpUl} className={styles.footerul}>
            <li>Stay updated and sign up for BeeLine-ParaTransit newsletter</li>
            <li><input type="input" placeholder="Enter your email" /></li>
        </ul>
        <ul className={styles.footerul}>
            <li>Westchester County © 2024</li>
            <li>148 Martine Avenue, White Plains, NY 10601</li>
            <li>(914) 995-2000</li>
            <li>Privacy / Disclaimer</li>
        </ul>
        <ul className={styles.footerul}>
            <div className={styles.sociallogos}>
                <li><a href="https://www.linkedin.com/company/westchester-county"><FaLinkedin /></a></li>
                <li><a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fwestchestergov"><FaFacebookSquare /></a></li>
                <li><a href="https://www.youtube.com/channel/UCC774tkGUZw8xoZtHhuQUsQ"><FaYoutube /></a></li>
                <li><a href="https://www.instagram.com/westchester_county_government/"><FaInstagram /></a></li>
            </div>
        </ul>
        <hr id={styles.hrMain}></hr>
        <ul className={styles.footerul}>
            <li>© TRANSIT ASSIST Inc. All Rights Reserved 2023</li>
            <li>Terms & Conditions</li>
        </ul>
    </footer>
  );
};

export default Footer;