import React from "react";
import {Link} from "react-router-dom";

function Home() {
  return (
    <Link to={`/game`}>
      <img
        alt="homepage"
        id="homepage"
        src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a"
      />
    </Link>
  );
}

export default Home;
