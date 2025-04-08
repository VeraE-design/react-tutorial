import React from 'react'

const ComplexList = () => {
        const staff = [
          {
            id: 1,
            image:
              "https://media.istockphoto.com/id/494711330/photo/latin-young-man-in-a-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=jh_4ztShbG9BOjIFKZ7qV6LKabvpz7x1zGEjfLKwpm4=",
            name: "John Doe",
            role: "Chief Operating Officer",
          },
          {
            id: 2,
            image:
              "https://media.istockphoto.com/id/2135643049/photo/waist-up-shot-of-a-handsome-hispanic-latino-carefree-black-male-looking-at-the-camera-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=9UhZSA9t22Mu5gXF9Y3yQlPNA9nXbbKaS78ThhhQXgM=",
            name: "Peter Pan",
            role: "Head of Finance",
          },
          {
            id: 3,
            image:
              "https://media.istockphoto.com/id/2165425187/photo/portrait-of-a-woman-in-an-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=Nn0pYLaWhUJCW-9fpqR_C60Glc59sGIEXH1H9zSPRg0=",
            name: "Jane Doe",
            role: "Head of Marketing",
          },
          {
            id: 4,
            image:
              "https://images.unsplash.com/photo-1617171819965-da05f22afebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZSUyMHBvdHJhaXRzfGVufDB8fDB8fHww",
            name: "Liyu Kong",
            role: "Creative Director",
          },
          {
            id: 5,
            image:
              "https://media.istockphoto.com/id/2099403180/photo/laughing-yougn-businesswoman-standing-with-her-arms-crossed-against-an-office-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=fd9yaVrgWeZIHTfllbUmxTjPRVD2b79Yzt4HQlQfNSA=",
            name: "Sonia Blade",
            role: "Admin Officer",
          },
        ];
  return (
    <div className='bg-blue-200 py-10'>
        <h1 className="text-center text-blue-800 text-4xl font-bold">Meet The Team</h1>
        <p className='my-5 text-center text-md text-black w-[600px] mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quis velit quasi dicta impedit labore. Quisquam iste commodi ipsa nihil! Maxime omnis sunt laborum consequatur itaque illo maiores a error?
        </p>
        <div className='flex gap-3.5 max-w-[1000px] flex-wrap mx-auto'>
           {staff.map((member) => {
            const {id, image, name, role} = member
            return <div key={id} className='w-[320px] bg-white p-2.5 rounded-md'
            >
                <img src={image} alt={name}  className='rounded-md h-[300px] w-full object-cover'/>
                <h1 className='text-blue-900 font-bold text-2xl mt-3'>
                    {name}
                </h1>
                <p className='text-gray-400 font-semibold'>{role}</p>

            </div>;
                
           })
           }
        </div>
    </div>
  )
}

export default ComplexList