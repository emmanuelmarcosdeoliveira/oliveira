import { MENU } from "../utils/data";
const Header = () => {
  return (
    <div className="wrapper">
      <nav className="text-base500 font-sans font-semibold text-base sm:text-lg flex justify-center fixed left-0 right-0 z-10 backdrop-blur-sm h-16">
        <ul className="flex p-4">
          {MENU.map((item) => (
            <li>
              <a
                className="p-4 hover:text-blueColor transition-colors"
                href={item.url}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
