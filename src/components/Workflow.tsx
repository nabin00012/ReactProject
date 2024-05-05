import code from "../assets/code.jpg";
import { CircleCheck } from "lucide-react";
const Workflow = () => {
  return (
    <>
      <div className="lg:pt-[150px] flex justify-center tracking-wide">
        <h1 className="text-5xl">
          Acclerate Your{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text">
            Coding Workflow
          </span>
        </h1>
      </div>

      <div className="flex justify-center w-full  pt-11">
        <img src={code} alt="Code Text" className="w-[40%] p-8 " />
        <div className="w-[40%] p-8">
          <ul className="pt-6">
            <li>
              <div className="flex">
                <CircleCheck color="#94f056" />
                <span className="pl-5 text-xl"> Code Merge</span>
              </div>
              <p className=" opacity-35 pl-10 pt-2 pb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                elit. Ipsam elit. Ipsam
              </p>
            </li>
            <li>
              <div className="flex">
                <CircleCheck color="#94f056" />
                <span className="pl-5 text-xl">Review Code </span>
              </div>
              <p className=" opacity-35 pl-10 pt-2 pb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                elit. Ipsam elit. Ipsam
              </p>
            </li>{" "}
            <li>
              <div className="flex">
                <CircleCheck color="#94f056" />
                <span className="pl-5 text-xl"> Ai Assistence </span>
              </div>
              <p className=" opacity-35 pl-10 pt-2 pb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                elit. Ipsam elit. Ipsam
              </p>
            </li>{" "}
            <li>
              <div className="flex">
                <CircleCheck color="#94f056" />
                <span className="pl-5 text-xl"> Share Work</span>
              </div>
              <p className=" opacity-35 pl-10 pt-2 pb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                elit. Ipsam elit. Ipsam
              </p>
            </li>
            <li>
              <div className="flex">
                <CircleCheck color="#94f056" />
                <span className="pl-5 text-xl"> Collaboration</span>
              </div>
              <p className=" opacity-35 pl-10 pt-2 pb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                elit. Ipsam elit. Ipsam
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Workflow;
