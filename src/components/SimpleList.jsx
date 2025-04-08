import React from 'react'

const SimpleList = () => {
    const customers = ["Ade", "John", "Jane", "Peter", "Ade"];
    const users = ["Sandra", "Bisi", "Jeff", "Isaac", "Joy"]
  return (
    <div>

    <div>
      <h1>Outputting Lists in React</h1>
      {customers.map((customer, index) => {
          // always pass key={index}
          return <p key={index}>{customer}</p>;
        })}
    </div>
    <div>
        
        {users.map((user, index)=> {
            return <h1 className='text-green-600 uppercase' key={index}>{user}</h1>
        })}

    </div>
    
        </div>
  );
};

export default SimpleList;