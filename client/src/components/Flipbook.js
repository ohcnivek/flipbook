import { useEffect, useState } from "react";
import useInterval from "../hooks/useInterval";
import { getVideoInfo } from "../api/Utils";

export const Flipbook = () => {
  const [frames, setFrames] = useState([]);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [currentFrame, setCurrentFrame] = useState();

  useEffect(() => {
    async function getFrames() {
      try {
        getVideoInfo(1).then((res) => {
          setFrames(res.data.frames);
        });
      } catch (err) {
        console.log(err);
      }
    }
    getFrames();
  }, []);

  useInterval(() => {
    const IMAGE_PATH = `http://localhost:3001/${frames[currentFrameIndex]}`;
    setCurrentFrame(<img src={`${IMAGE_PATH}`} alt="hi" />);
    setCurrentFrameIndex((currentFrameIndex + 1) % frames.length);
  }, 20);

  return <div>{currentFrame}</div>;
};

export default Flipbook;
