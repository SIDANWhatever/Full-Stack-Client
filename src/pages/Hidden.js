import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Hidden(props) {
  const open = (url) => () => {
    window.open(url, "_blank");
  };

  return (
    <div className="hidden" id="">
      <div className="bubble"></div>
      <div className="">
        <div className="huser">
          <td className="userinfo">
            <tr className="lnumber">{props.followers}</tr>
            <tr className="lsocialwords">Followers</tr>
          </td>
          <td className="userinfo">
            <tr className="rnumber">{props.friends}</tr>
            <tr className="rsocialwords">Friends</tr>
          </td>
        </div>
        <div className="htag">
          <div className="tags">
            <span className="whashtag">Hashtag #</span>
            <span className="hashtag">{props.hashtags}</span>
          </div>
          <div className="tags">
            <span className="wcashtag">Cashtag $</span>
            <span className="cashtag">{props.cashtags}</span>
          </div>
        </div>
        <div className="horiginal">
          <button onClick={open(props.url)}>Go Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default Hidden;
