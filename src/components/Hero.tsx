import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <>
      <div className="text-[60px] p-10  flex justify-center">
        <div className="pt-[100px]">
          VirtualR build tools <span className="text-[orange]">for</span> <br />{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text">
            Developers
          </span>
        </div>
      </div>
      <div className="flex justify-center w-full ">
        <p className=" w-[50%] opacity-40 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          <br></br>
          <span className=" w-[30%] ml-2 ">
            dolor sit, amet consectetur adipisicing elit. Consequatur blanditiis
          </span>
        </p>
      </div>

      <div className="flex  justify-center space-x-10 pt-10 pb-5">
        <button className="border rounded-md py-2 px-3 text-[orange]">
          Start Free
        </button>
        <button className="border rounded-md py-2 px-3"> Read Docs</button>
      </div>

      <div className="p-10 flex justify-evenly">
        <video
          autoPlay
          className="w-[35%] p-5 border border-orange-500 rounded-md border-opacity-20"
          src={video1}
        >
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          className="w-[35%] p-5 border  border-orange-500 rounded-md border-opacity-20"
          src={video2}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Hero;
