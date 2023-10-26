import icon from '../../../assets/icon.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='rounded bg-gradient-to-r from-violet-300 to-fuchsia-500'>
            <footer className="footer p-10 text-base-content all-font mt-6">
                <aside>
                    <img className='w-32 h-32 rounded-full object-contain' src={icon} alt="" />
                    <p>Dreams Car<br />Your Journey to Automotive Excellence</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

            <footer className="footer footer-center p-4 text-base-content all-font">
                <aside>
                    <p>Copyright © {currentYear} , Dreams Car</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;