import {
  Fingerprint,
  Rocket,
  Shield,
  Zap,
  Globe2Icon,
  CableIcon,
} from "lucide-react";

const Features = () => {
  return (
    <>
      <div className="flex justify-center p-5 ">
        <p className="text-2xl text-[orange]"> Features</p>
      </div>

      <div className="flex justify-center p-10 tracking-widest">
        <p className="text-5xl">
          Easily Build{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text">
            your code
          </span>
        </p>
      </div>

      <div className="  grid grid-cols-3 gap-3 place-items-center p-11 ">
        <div>
          <div className="flex ">
            <Rocket color="#f76d55" />
            <p className="pl-5">Drag and Drop</p>
          </div>

          <p className=" pl-11 pt-4 pr-4 pb-5 opacity-30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            odit minus laborum, ducimus accusantium doloremque. Quidem numquam
            tenetur tempore repellendus possimus autem reiciendis earum
          </p>
        </div>

        <div>
          <div className="flex ">
            <Fingerprint color="#f76d55"></Fingerprint>
            <p className="pl-5">Multi-Platfrom Compability</p>
          </div>

          <p className=" pl-11 pt-4 pr-4 pb-5 opacity-30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            odit minus laborum, ducimus accusantium doloremque. Quidem numquam
            tenetur tempore repellendus possimus autem reiciendis earum
          </p>
        </div>

        <div>
          <div className="flex ">
            <Shield color="#f76d55"></Shield>

            <p className="pl-5">Built-in Templates</p>
          </div>

          <p className=" pl-11 pt-4 pr-4 pb-5 opacity-30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            odit minus laborum, ducimus accusantium doloremque. Quidem numquam
            tenetur tempore repellendus possimus autem reiciendis earum
          </p>
        </div>

        <div>
          <div className="flex ">
            <Zap color="#f76d55"></Zap>
            <p className="pl-5">Real Time Preview</p>
          </div>

          <p className=" pl-11 pt-4 pr-4 pb-5 opacity-30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            odit minus laborum, ducimus accusantium doloremque. Quidem numquam
            tenetur tempore repellendus possimus autem reiciendis earum
          </p>
        </div>

        <div>
          <div className="flex ">
            <CableIcon color="#f76d55"></CableIcon>
            <p className="pl-5">Clobaration Tools</p>
          </div>

          <p className=" pl-11 pt-4 pr-4 pb-5 opacity-30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            odit minus laborum, ducimus accusantium doloremque. Quidem numquam
            tenetur tempore repellendus possimus autem reiciendis earum
          </p>
        </div>

        <div>
          <div className="flex ">
            <Globe2Icon color="#f76d55"></Globe2Icon>
            <p className="pl-5">Analytics Dashboard </p>
          </div>

          <p className=" pl-11 pt-4 pr-4 pb-5 opacity-30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            odit minus laborum, ducimus accusantium doloremque. Quidem numquam
            tenetur tempore repellendus possimus autem reiciendis earum
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
