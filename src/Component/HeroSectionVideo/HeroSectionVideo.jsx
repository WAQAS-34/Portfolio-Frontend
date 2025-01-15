export function Video() {
    return (
      <video  className="promo-video"  autoPlay muted loop >
        <source src="/video/promo.mp4" type="video/mp4" />
    
        Your browser does not support the video tag.
      </video>
    )
  }