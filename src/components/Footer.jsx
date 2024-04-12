const Footer = ({ oneLiner }) => {
  return (
    <footer>
      <div className="social-icons">
        <h5 className="major-mono">Nick Golebiewski is an {oneLiner}</h5>
      </div>

      <div className="social-icons">
        <a href="https://www.instagram.com/nickgolebiewski/" target="_blank">
          <img src="./svg/instagram.svg" alt="Instagram" role="img" />
        </a>

        <a href="https://twitter.com/nickdesign" target="_blank">
          <img src="./svg/twitter-x.svg" alt="Twitter" role="img" />
        </a>

        <a href="https://github.com/ngolebiewski" target="_blank">
          <img src="./svg/github.svg" alt="GitHub" role="img" />
        </a>

        <a href="https://www.linkedin.com/in/nickgolebiewski/" target="_blank">
          <img src="./svg/linkedin.svg" alt="LinkedIn" role="img" />
        </a>

        <a href="https://nickgolebiewski.us8.list-manage.com/subscribe?u=68809da01186884c3ee48ebb8&id=feb024a580" target="_blank">
          <img src="./svg/envelope.svg" alt="Email List" role="img" />
        </a>

        <a href="https://www.etsy.com/shop/NickGolebiewski" target="_blank">
          <img src="./svg/etsy.svg" alt="Etsy" role="img" />
        </a>

        <a href="https://www.patreon.com/nickgolebiewski" target="_blank">
          <img src="./svg/patreon.svg" alt="Patreon" role="img" />
        </a>
      </div>
    </footer>
  )
}

export default Footer;