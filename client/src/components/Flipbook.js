import { useEffect, useState } from "react";
import useInterval from "../hooks/useInterval";
import { getVideoInfo } from "../api/Utils";
import { InputSlider } from "./InputSlider";
import clsx from "clsx";
import VideoInfo from "./VideoInfo";

export const Flipbook = () => {
  const [playing, setPlaying] = useState(true);
  const [frames, setFrames] = useState([]);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [currentFrame, setCurrentFrame] = useState();
  const [sliderValue, setSliderValue] = useState(65);
  const [sliderProps] = useState({
    min: 30,
    max: 100,
    value: 20,
    label: "Scroll to adjust the FPS (frames per second)",
  });
  const [videoMetaData, setVideoMetaData] = useState({
    name: "",
    description: "",
    source: "",
  });

  const handleSliderChange = (e) => {
    if (e && e.target) {
      setSliderValue(e.target.value);
    }
  };
  const handleButtonClick = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    async function getFrames() {
      try {
        getVideoInfo(1).then((res) => {
          setFrames(res.data.frames);
          setVideoMetaData({
            name: res.data.name,
            description: res.data.description,
            source: res.data.source,
          });
        });
      } catch (err) {
        console.log(err);
      }
    }
    getFrames();
  }, []);

  useInterval(() => {
    if (playing) {
      const IMAGE_PATH = `http://localhost:3001/${frames[currentFrameIndex]}`;
      setCurrentFrame(
        <img src={`${IMAGE_PATH}`} alt={`frame ${currentFrameIndex}`} />
      );
      setCurrentFrameIndex((currentFrameIndex + 1) % frames.length);
    }
  }, 1000 / sliderValue);

  return (
    <div className="flex justify-between">
      <div className="relative w-[500px]">
        {currentFrame}
        {!playing && (
          <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
            <h3 class="text-xl text-white font-bold">Paused</h3>
            <p class="mt-2 text-sm text-gray-300">
              Hope you're liking the project!
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col pl-4 space-y-4">
        <VideoInfo props={videoMetaData} />
        <div>
          <p className="text-sm font-bold">Speed Controls:</p>
          <div className="pl-2">
            <InputSlider
              {...sliderProps}
              classes=""
              onChange={handleSliderChange}
              value={sliderValue}
            />
            <p className="text-sm font-semibold">Current FPS: {sliderValue}</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-sm font-bold pr-4"> Play/Pause: </p>
          <button
            className={clsx(
              "rounded text-sm font-bold p-2",
              playing && "bg-red-200",
              !playing && "bg-green-100"
            )}
            onClick={handleButtonClick}
          >
            {playing ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flipbook;
