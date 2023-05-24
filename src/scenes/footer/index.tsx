//import Logo from "@/assets/Logo.png";
import Logo from "@/assets/LogoFcsGray.png";

const Footer = () => {
  return (
    <footer className="bg-gray-500 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 text-gray-10 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img className="mb-10 max-h-16" alt="logo" src={Logo} />

          <p>©FC Souillon Tout droit réservé.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-primary-500">Liens</h4>
          <a
            href="https://instagram.com/fc_souillon?igshid=MjEwN2lyYWYwYw=="
            target="_blank"
          >
            <p className="my-5 hover:text-primary-500">@fc_souillon</p>
          </a>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-primary-500">Nous contacter</h4>
          <a href="mailto:fcsouillon@gmail.com">
            <p className="my-5">fcsouillon@gmail.com</p>
          </a>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
