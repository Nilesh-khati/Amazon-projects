import express from "express";
const router = express.Router();

const banners = [
  {
    title: "New Arrivals",
    image: "https://img.freepik.com/free-vector/flat-sale-banner-template_23-2148908770.jpg",
    link: "/new-arrivals",
    caption: "Shop Now",
  },
  {
    title: "Fashion Sale",
    image: "https://img.freepik.com/free-psd/modern-fashion-sale-banner-template_120329-1726.jpg",
    link: "/fashion-sale",
    caption: "Explore Deals",
  },
  {
    title: "Fashion Sale",
    image: "https://www.freepik.com/premium-vector/realistic-flash-sale-promo-premium-vector_17866338.htm#fromView=search&page=1&position=35&uuid=9153d8b9-b3df-4055-96cb-f5a2b636b1c1&query=product+Discount+Sale",
    link: "/fashion-sale",
    caption: "Explore Deals",
  },
  {
    title: "Summer Sale",
    image: "https://img.freepik.com/free-psd/summer-fashion-sale-web-banner-template_120329-1505.jpg",
    link: "/summer-sale",
    caption: "See Offers",
  },
];

router.get("/", (req, res) => {
  res.send(banners);
});

export default router;