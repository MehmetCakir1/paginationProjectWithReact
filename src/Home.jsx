import axios from "axios";
import { useEffect, useState } from "react";
import Follower from "./components/Follower";
import Pagination from "./components/Pagination";
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from "react-icons/bs";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(8);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setPosts(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log(post);

//next btn

const next = ()=>{
  if(currentPage!==Math.ceil((posts.length)/postsPerPage)){
    setCurrentPage(currentPage+1)
}else{
  setCurrentPage(1)
}
}
//previous btn
const previous = ()=>{
  if(currentPage!==1){
    setCurrentPage(currentPage-1)
}else{
  setCurrentPage(Math.ceil(posts.length/postsPerPage))
}
}
  return (
    <div>
      {loading ? (
        <h1 className="text-center fs-1 mt-md-5">Loading...</h1>
      ) : (
        <div className="d-flex flex-column ">
          <div className="row d-flex container m-auto p-2 mt-4 cardContainer">
            {currentPosts.map((item) => {
              return <Follower key={item.id} item={item} />;
            })}
          </div>
          <div className="m-auto d-flex paginationButtons">
            <button className="fs-2 mx-2 text-primary border-0" onClick={previous} ><BsFillArrowLeftCircleFill/></button>
            <Pagination
              totalPosts={posts.length}
              postsPerPage={postsPerPage}
              paginate={paginate}
              currentPage={currentPage}
            />
            <button className="fs-2 mx-2 text-primary border-0" onClick={next}><BsFillArrowRightCircleFill/></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
