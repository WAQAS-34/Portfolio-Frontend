export function Video() {
    return (
      <video  className="promo-video"  autoPlay muted loop poster="/video/thumbnail.png"p  >
        <source src="/video/v2.mp4" type="video/mp4"  />
    
        Your browser does not support the video tag.
      </video>
    )
  }