export const VideoInfo = ({ props }) => {
  console.log(props);

  return (
    <div className="flex flex-col">
      <p className="text-sm font-bold">Information about the Video:</p>
      <div className="text-sm pl-2">
        <p> name: {props.name} </p>
        <p> description: {props.description} </p>
        <p> source: {props.source}</p>
      </div>
    </div>
  );
};

export default VideoInfo;
