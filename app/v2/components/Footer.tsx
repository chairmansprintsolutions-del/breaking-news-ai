export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>
          <h2>BREAKING NEWS AI</h2>

          <p>
            The World's First AI Newspaper
          </p>

          <small>
            AI Powered • Co-powered by Sprint Solutions
          </small>
        </div>

        <div>
          <h4>News</h4>

          <a href="/v2">Home</a>
          <a href="/v2/india">India</a>
          <a href="/v2/world">World</a>
          <a href="/v2/business">Business</a>
          <a href="/v2/technology">Technology</a>
        </div>

        <div>
          <h4>Explore</h4>

          <a href="/v2/sports">Sports</a>
          <a href="/v2/jobs">Jobs</a>
          <a href="/v2/entertainment">Entertainment</a>
          <a href="/v2/archive">Archive</a>
        </div>

        <div>
          <h4>Coming Soon</h4>

          <p>Daily PDF</p>
          <p>Podcast</p>
          <p>Editorial Cartoon</p>
          <p>Personalized Edition</p>
        </div>

      </div>

      <div className="copyright">
        © 2026 Breaking News AI • Co-powered by Sprint Solutions
      </div>

    </footer>
  );
}
