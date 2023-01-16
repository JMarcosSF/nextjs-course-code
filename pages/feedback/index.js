import { Fragment, useEffect, useState } from "react";

import { buildFeedbackPath, getFeedbackData } from "../api/feedback/index";

// const CAT_SERVICE = {
//   fetchCatData: async () => {
//     const response = await fetch("https://catfact.ninja/breeds");
//     const data = await response.json();
//
//     return data;
//   }
// }

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  useEffect(() => {
    const fetchText = async () => {
      const data = await CAT_SERVICE.fetchCatData();
      const json = await data;
      console.log(json.data)
    };

    fetchText().catch(e => console.log(e));
  }, []);

  function loadFeedbackHandler(feedbackId) {
    fetch(`/api/feedback/${feedbackId}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      }); // /api/some-feedback-id
  }

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData?.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  // const catData = await CAT_SERVICE.fetchCatData();
  // const json = await catData;
  // console.log(json.data)
  const filePath = buildFeedbackPath();
  const data = getFeedbackData(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
