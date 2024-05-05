import Card from "./Card";

const Pricing = () => {
  return (
    <>
      <div>
        <h1 className="text-6xl bg-gradient-to-r from-orange-300 to-orange-700 text-transparent bg-clip-text text-center p-9">
          Pricing
        </h1>
      </div>
      <div className="flex justify-evenly p-8 pt-8">
        <Card values={false}>Free</Card>
        <Card values={true}>Pro</Card>
        <Card values={false}>Enterprise</Card>
      </div>
    </>
  );
};

export default Pricing;
