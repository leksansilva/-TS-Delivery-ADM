import React, { useEffect, useState } from "react";

import FeedBackList from "../../components/lists/FeedbackList";
import Loading from "../../components/Loading";
import api from "../../services/api";
import { getToken } from "../../services/auth";
import FeedbackTemplate from "./FeedbackTemplate";

export default function Feedback() {
  const [loading, setLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const headers = { Authorization: `Bearer ${getToken()}` };

  useEffect(() => {
    setLoading(true);
    api
      .get("api/Feedbacks", { headers })
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          setFeedbacks(response.data);
        }
      })
      .catch((error) => { setLoading(false);});

    return () => setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <FeedbackTemplate
      feedback={() =>
        loading ? (
          <Loading />
        ) : (
          <FeedBackList feedbacks={feedbacks} name="Feedback" />
        )
      }
    />
  );
}
