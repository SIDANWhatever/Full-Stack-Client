import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hidden from "./Hidden";
import twitter from "../image/twitter_circle-512.webp";
import ig from "../image/Instagram_logo_2016.svg";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [listOfTweets, setListOfTweets] = useState([]);
  const [hiddenPost, setHiddenPost] = useState({});
  let navigate = useNavigate();

  const clickPost = (index) => () => {
    setHiddenPost((state) => ({
      ...state,
      [index]: !state[index],
    }));
    console.log(index);
    console.log(hiddenPost);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/tweets").then((response) => {
      setListOfTweets(response.data);
    });
  }, []);

  return (
    <div>
      {listOfTweets.map((value, key) => {
        return (
          <div key={value.id} onClick={clickPost(value.id)}>
            {/* head here */}
            <div className="post">
              <div>
                <div className="hicon">
                  <p>
                    <img
                      className="icon"
                      src={value.user_profileImageUrl}
                      alt="new"
                    />
                  </p>
                </div>
                <div className="hdetail">
                  <td className="title">{value.user_displayname}</td>
                  <td className="title">{value.user_username}</td>
                  <td className="title">{value.date}</td>
                </div>
                <div className="hbody">
                  <span className="body">{value.content}</span>
                </div>
                <div className="hshare">
                  <img className="share" src={twitter} alt="" />
                  <img className="share" src={ig} alt="" />
                </div>
              </div>
            </div>
            {/* footer below */}
            {hiddenPost[value.id] ? (
              <Hidden
                followers={value.user_followersCount}
                friends={value.user_friendsCount}
                hashtags={value.hashtags}
                cashtags={value.cashtags}
                url={value.url}
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
