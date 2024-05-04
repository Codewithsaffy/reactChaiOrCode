import Storeitem from "../components/Storeitem";
import storeitem from "../data/item.json";

function Store() {
  return (
    <>
      <h1 className="container px-4 text-3xl font-semibold">Store</h1>
      <div className="grid p-4 grid-cols-1 md:grid-cols-2
      sm:grid-cols-2
      lg:grid-cols-3 gap-4 ">
        {storeitem.map(({ id, name, price, image }) => (
          <Storeitem key={id} id={id} name={name} price={price} image={image} />
        ))}
      </div>

    </>
  );
}

export default Store;
