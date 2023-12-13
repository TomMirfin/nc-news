import { useEffect, useState } from "react";
import { getAllTopics } from "../../apis/apis";
useState;

function Topics() {
  useEffect(() => {
    getAllTopics().then((topics) => {
      console.log(topics);
    });
  }, []);

  return <div></div>;
}

export default Topics;
