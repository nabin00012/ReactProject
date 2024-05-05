import { resourcesLinks } from "./constants/Contants";

const Footer = () => {
  return (
    <>
      <hr className=" w-[80%] bg-gray-600 opacity-50 h-1/2 mx-auto my-6" />
      <div>
        <div>
          <h1> Resource</h1>
          {resourcesLinks.map((item, index) => (
            <div>
              <ul></ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
