import instagram from "../Images/instagram.png"
import facebook from "../Images/facebook.png"
import twitter from "../Images/twitter.png"


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <h3>Purr-fect Foods</h3>
                <p>Follow the Purr-fect Foods to become the purr-fect masterchef!</p>
                <ul>
                    <li><a href=""><img src={instagram} alt="instagram" /></a></li>
                    <li><a href=""><img src={facebook} alt="facebook" /></a></li>
                    <li><a href=""><img src={twitter} alt="twitter" /></a></li>                
                </ul>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy;{new Date().getFullYear()} Purrfect Foods Recipe Finder - All rights reserved</p>
            </div>
            

        </div>
    )
}

export default Footer
