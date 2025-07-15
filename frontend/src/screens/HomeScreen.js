import { useEffect, useReducer } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

// Reducer function for useReducer
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  // Helper for fallback product images if missing
  const getProductImage = (product, idx) =>
    product.image ||
    `https://source.unsplash.com/400x400/?product,shopping,${idx}`;

  // Example deals section (like Amazon's "Today's Deals")
  const deals = [
    {
      title: "Up to 50% off | Electronics",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
      link: "#",
    },
    {
      title: "Home essentials under Rs.2500",
      img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
      link: "#",
    },
    {
      title: "Top deals in Fashion",
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
      link: "#",
    },
    {
      title: "Toys & Games | Best Sellers",
      img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      link: "#",
    },
  ];

  // Example "Shop by Category" section
  const categories = [
    {
      name: "Mobiles",
      img: "https://images.unsplash.com/photo-1510557880182-3d4d3c1b2604?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Beauty",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Appliances",
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Books",
      img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div style={{minHeight: "100vh" }}>
      <Helmet>
        <title>Amazona</title>
      </Helmet>
      {/* Banner Carousel */}
      <Carousel className="mb-4" style={{ maxWidth: "1400px", margin: "0 auto", borderRadius: "10px", overflow: "hidden" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: "350px", objectFit: "cover" }}
            src="https://img.freepik.com/premium-psd/fashion-sales-social-media-facebook-cover-webinar-design_671392-886.jpg?w=1380"
            alt="New Arrivals Banner"
          />
          <Carousel.Caption>
            <h3>New Arrivals</h3>
            <Button variant="warning">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: "350px", objectFit: "cover" }}
            src="https://img.freepik.com/premium-psd/watch-sale-facebook-cover-web-banner-template_179771-185.jpg"
            alt="Fashion Sale Banner"
          />
          <Carousel.Caption>
            <h3>Fashion Sale</h3>
            <Button variant="warning">Explore Deals</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: "350px", objectFit: "cover" }}
            src="https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_120329-3845.jpg?t=st=1748440611~exp=1748444211~hmac=eac0ed42fd816075d1ef9f06159dbaca37a502bf41cc783356272d8e60197200&w=1380"
            alt="Special Offer Banner"
          />
          <Carousel.Caption>
            <h3>Special Offer</h3>
            <Button variant="warning">Grab Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: "350px", objectFit: "cover" }}
            src="https://img.freepik.com/premium-psd/fashion-sale-facebook-cover-post-template_502601-446.jpg?w=1380"
            alt="Mega Sale Banner"
          />
          <Carousel.Caption>
            <h3>Mega Sale</h3>
            <Button variant="warning">Don't Miss</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      

      {/* Amazon-like Deals Row */}
      <div style={{ maxWidth: "1400px", margin: "0 auto 30px auto", display: "flex", gap: "60px", justifyContent: "center", flexWrap: "wrap" }}>
        {deals.map((deal, idx) => (
          <div key={idx} style={{ background: "#fff", padding: "20px", borderRadius: "8px", width: "260px", textAlign: "center", boxShadow: "0 2px 8px #0001" }}>
            <img src={deal.img} alt={deal.title} style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "6px" }} />
            <h5 style={{ margin: "15px 0 10px 0" }}>{deal.title}</h5>
            <Button variant="outline-warning" size="sm" href={deal.link}>See more</Button>
          </div>
        ))}
      </div>

      {/* Shop by Category */}
      <div style={{ maxWidth: "1400px", margin: "0 auto 30px auto", display: "flex", gap: "60px", justifyContent: "center", flexWrap: "wrap" }}>
        {categories.map((cat, idx) => (
          <div key={idx} style={{ background: "#fff", padding: "20px", borderRadius: "8px", width: "220px", textAlign: "center", boxShadow: "0 2px 8px #0001" }}>
            <img src={cat.img} alt={cat.name} style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "6px" }} />
            <h5 style={{ margin: "15px 0 10px 0" }}>{cat.name}</h5>
            <Button variant="outline-warning" size="sm">Shop now</Button>
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", background: "#fff", borderRadius: "10px", padding: "30px 20px", boxShadow: "0 2px 8px #0001" }}>
        <h2 style={{ fontWeight: "bold", marginBottom: "25px" }}>Featured Products</h2>
        <div className="products">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Row>
              {products.map((product, idx) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-4">
                  <Product product={{ ...product, image: getProductImage(product, idx) }} />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </div>
      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          margin: "40px 0 10px 0",
          color: "#888",
          fontSize: "1rem",
          background: "#fff",
          borderRadius: "10px",
          padding: "20px 0",
          boxShadow: "0 2px 8px #0001"
        }}
      >
        <hr style={{ margin: "0 0 15px 0" }} />
        <div>
          <strong>Amazona</strong> &copy; {new Date().getFullYear()} &mdash; Amazona is a demo e-commerce platform inspired by Amazon.<br />
          Shop a wide range of products, discover deals, and enjoy a seamless shopping experience.<br />
          Built with the MERN stack for learning and portfolio purposes. All images and content are for demonstration only.
        </div>
      </footer>
    </div>
  );
}

export default HomeScreen;