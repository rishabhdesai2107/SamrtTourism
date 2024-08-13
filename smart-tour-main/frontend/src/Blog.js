import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Blog() {
  AOS.init()
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    // Dynamically import styles when the component mounts
    import("./assets/vendor/bootstrap/css/bootstrap.min.css");
    import("./assets/css/clean-blog.min.css");

    fetchblogs();
  }, []);

  const fetchblogs = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BACKEND + "/blogs/blogs"
      );
      // console.log(response.data)
      setBlogData(response.data);
      // console.log("set kiya hua", blogData);
      return response;
    } catch (error) {
      console.error("Error fetching records:", error);
      return null; // Handle the error as per your application's requirement
    }
  };
  const formatDateTime = (dateTime) => {
    return format(new Date(dateTime), "dd MMMM yyyy h:mm aaaa OOOO");
  };

  return (
    <>
        <div className="blog-bg">
        <h1
            className="display-5 fw-bold mb-6 text-center  bg-text "
            style={{ color: "white" }}
            data-aos="fade-up"   data-aos-offset=""
                data-aos-delay="10"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
          >
            Blogs
          </h1>
        </div>

      <div className="container mt-4">
        <div className="row">
          
          <div className="col-lg-12 col-md-10 mx-auto ">
            {blogData.map((data, index) => (
              <div className="post-preview blog-cols" key={index}  data-aos="fade-in"   data-aos-offset=""
              data-aos-delay="20"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out">
                <a href="#">
                  <h2 className="post-title">{data.title}</h2>
                  <h5 className="post-subtitle">{data.description}</h5>
                </a>
                <p className="post-meta">
                  Posted by <a href="#">Admin</a>{" "}
                  {formatDateTime(data.createdAt)}
                </p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
