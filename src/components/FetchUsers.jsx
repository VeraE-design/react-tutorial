import { CircleLoader } from "react-spinners";
import { useFetch } from "../hooks/useFetch";
// display firstname lastname image gender address(636, main street, phoenix missipi)

const url = "https://dummyjson.com/user";

const FetchUsers = () => {
  const {
    data: { users },
    isLoading,
  } = useFetch(url);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-60">
        <CircleLoader color="#ff0000" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-[60px]">TOWN CENSUS</h1>
      <section className="flex items-center gap-2.5 flex-wrap">
        {users.map((user) => {
          const { id, firstname, lastname, image, gender, address } = user;
          return (
            <div key={id} className="w-full max-w-[320px] shadow-md h-[400px]">
              <img
                src={image}
                alt="Title"
                className="w-full object-cover h-[80%]"
              />
              <div className="flex gap-2.5 items-center justify-center">
                <p>{firstname}</p>
                <p>{lastname}</p>
                <p>{gender}</p>
              </div>
              <div className="flex items-center justify-center">
                <p>{`${address.address}, ${address.city}, ${address.state}`}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FetchUsers;
