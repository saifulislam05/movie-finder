import React from 'react'

const ModalData = ({ data }) => {
    const {
      Poster,
      Title,
      Year,
      Released,
      Runtime,
      Genre,
      Director,
      Plot,
      Language,
      Country,
      imdbRating,
    } = data;
  return (
    
    <div className="md:flex px-4 leading-none max-w-4xl">
        <div className="flex-none ">
            <img src={Poster}
                alt={Title}
                className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 " />
        </div>

        <div className="flex-col text-gray-300 px-4">

            <p className="pt-4 text-2xl font-bold"><span id="title">{Title}</span> | <span id="year">{Year}</span></p>
            <hr className="hr-text" data-content=""/>
            <div className="text-md flex justify-between my-2">
                <span className="font-bold"><span id="runtime">{Runtime}</span> | <span id="genre">{Genre}</span></span>
                <span className="font-bold"></span>
            </div>
            <p id="plot" className="hidden md:block my-4 text-sm text-left">{Plot}</p>
            <p  className="flex text-md my-2">
                Released on {Released}
            </p>
            <p id="rating" className="flex text-md my-2">
                Rating: {imdbRating}
            </p>
            <p  className="flex text-md my-2">
                Language: {Language}
            </p>
            <p  className="flex text-md my-2">
                Country: {Country}
            </p>
            <p  className="flex text-md my-2">
                Director: {Director}
            </p>

            
         </div>
    </div>
      
    //   <div className="md:flex px-4 leading-none max-w-4xl">
    //     <div className="flex-none ">
    //         <img src="https://m.media-amazon.com/images/M/MV5BMTUyMTA4NDYzMV5BMl5BanBnXkFtZTcwMjk5MzcxMw@@._V1_SX300.jpg" alt="My" name="" is="" khan="" className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 "/>
    //     </div>

    //     <div className="flex-col text-gray-300 px-4">

    //         <p className="pt-4 text-2xl font-bold"><span id="title">My Name Is Khan</span> | <span id="year">2010</span></p>
    //         <hr className="hr-text" data-content=""/>
    //         <div className="text-md flex justify-between my-2">
    //             <span className="font-bold"><span id="runtime">165 min</span> | <span id="genre">Adventure, Drama, Romance</span></span>
    //             <span className="font-bold"></span>
    //         </div>
    //         <p id="plot" className="hidden md:block my-4 text-sm text-left">An Indian Muslim man with Asperger's syndrome takes a challenge to speak to the President of the United States seriously and embarks on a cross-country journey.</p>
    //         <p className="flex text-md my-2">
    //             Released on 12 Feb 2010
    //         </p>
    //         <p id="rating" className="flex text-md my-2">
    //             Rating: 7.9
    //         </p>
    //         <p className="flex text-md my-2">
    //             Language: Hindi, English
    //         </p>
    //         <p className="flex text-md my-2">
    //             Country: India, United Arab Emirates, United States
    //         </p>
    //         <p className="flex text-md my-2">
    //             Director: Karan Johar
    //         </p>

            
    //     </div>
    // </div>
  )
}

export default ModalData