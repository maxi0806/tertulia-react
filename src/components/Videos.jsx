function Videos() {
  return (
    <div className="videos-container">

      <div className="video">
        <iframe
          className="video-yt-1"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uWqKMF4bHHc?si=U5dB1pIqd98rBi3_"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZCXG0BCFLNA?si=rCzHhODYZwTk4g_u"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AGTikZqSH44?si=shsqCPdqLs6tsL_T"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  )
}

export default Videos
