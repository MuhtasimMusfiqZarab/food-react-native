import axios from "axios";

//we are alternatively making axios instance (has some preset options defined => code reuse)
export default axios.create({
  // this baseURL is always tagged on (request to yelp.get('/search'))
  baseURL: "https://api.yelp.com/v3/businesses",
  //need to pass request header to authorize ourself
  headers: {
    Authorization:
      "Bearer KAfoClY4blhcplPGVVZNI_ikAe9yR9YiJUjfs2LfghvHXjakAqQgeZLVChZihVQ3Pqw__3gLi4DAljfTk2v1Y074QhKvSRW3JIbm_M2u0swvVZovzs3cB2iM3BV6XXYx"
  }
});
