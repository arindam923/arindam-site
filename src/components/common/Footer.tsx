import NewsletterSubscription from "./EmailInput";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 p-4">
      <div className="flex items-center justify-between border-b border-t mt-4 border-stone-800 py-4">
        <h2 className="text-2xl font-semibold">
          <span className="text-primary">A</span>Rshop
        </h2>
        <NewsletterSubscription />
      </div>
      <div className="grid grid-cols-4 gap-5 py-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul>
            <li>
              <a href="/about" className="text-neutral-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/products" className="text-neutral-400 hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="text-neutral-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <ul>
            <li>
              <a
                href="https://facebook.com/arshop"
                className="text-neutral-400 hover:text-white"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/arshop"
                className="text-neutral-400 hover:text-white"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/arshop"
                className="text-neutral-400 hover:text-white"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul>
            <li>
              <a
                href="/privacy-policy"
                className="text-neutral-400 hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-of-service"
                className="text-neutral-400 hover:text-white"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-neutral-400">
            123 Main Street
            <br />
            Anytown, USA 12345
          </p>
          <p className="text-neutral-400">Email: info@arshop.com</p>
          <p className="text-neutral-400">Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="text-center text-neutral-400 py-4">
        <p>&copy; {new Date().getFullYear()} ARshop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
