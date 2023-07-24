import "./SummaryVideo.scss";

const SummaryVideo: React.FC = () => {
  return (
    <div className="summary-video">
      <h4 className="summary-video__header">What is MetaMask?</h4>

      <div className="summary-video__video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YVgfHZMFFFQ"
          title="YouTube video player"
          //   frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          //   allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default SummaryVideo;
