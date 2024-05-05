import { CircleCheck } from "lucide-react";
interface prop {
  children: string;
  values: boolean;
}

const Card = (prop: prop) => {
  return (
    <>
      <div className="p-5  border rounded-md border-gray-500 w-[25%]">
        <h1 className="text-5xl p-4 tracking-tight">
          {prop.children}
          {prop.values ? (
            <span className="bg-gradient-to-r from-orange-300 to-orange-700 text-transparent bg-clip-text text-xl">
              {"  "}
              (Most Value)
            </span>
          ) : (
            ""
          )}
        </h1>
        <p className="text-2xl p-4">
          $1 <span className=" opacity-35 text-xl">/month</span>
        </p>

        <ul className="p-4">
          <li>
            <div className="flex">
              <CircleCheck />
              <span className="pl-5 pb-3 text-xl"> Code Merge</span>
            </div>
          </li>
          <li>
            <div className="flex">
              <CircleCheck />
              <span className="pl-5  pb-3 text-xl">Review Code </span>
            </div>
          </li>{" "}
          <li>
            <div className="flex">
              <CircleCheck />
              <span className="pl-5  pb-3 text-xl"> Ai Assistence </span>
            </div>
          </li>{" "}
          <li>
            <div className="flex">
              <CircleCheck />
              <span className="pl-5  pb-3 text-xl"> Share Work</span>
            </div>
          </li>
          <li>
            <div className="flex">
              <CircleCheck />
              <span className="pl-5  pb-3 text-xl"> Collaboration</span>
            </div>
          </li>
        </ul>
        <div className="flex justify-center py-5 px-5 ">
          <button className="  relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 border-opacity-50  dark:text-white dark:hover:text-gray-900 focus:ring-2 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-300 ">
            <span className="relative px-11 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Suscribe
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
