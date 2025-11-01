const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Nikhil Garg. Built with passion for engineering excellence.
          </p>
          <p className="text-xs mt-2 text-secondary-foreground/70">
            Georgia Institute of Technology | Mechanical Engineering
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
