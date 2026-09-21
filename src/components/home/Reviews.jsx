import style from '../../styles/components/Home/Reviews.module.css'

const reviews = [
  {
    name: 'Mar Ger',
    initials: 'MG',
    date: 'February 2026',
    text: 'Reasonable prices and high quality. My root touch-up blended perfectly, and the salon felt clean, welcoming, and professional.',
  },
  {
    name: 'Neha Chittal',
    initials: 'NC',
    date: 'February 2026',
    text: 'One of the best experiences for colour and cuts. Olga suggested a shade that suited my skin tone beautifully.',
  },
  {
    name: 'Uliana Zherepa',
    initials: 'UZ',
    date: 'February 2026',
    text: 'Olga listened carefully and gave me the haircut I wanted. The salon is clean, cozy, and very welcoming.',
  },
  {
    name: 'Farzaneh',
    initials: 'FA',
    date: 'December 2025',
    text: 'A wonderful experience. The hair colour was exactly right, the threading was precise, and the atmosphere felt warm and professional.',
  },
]

function Reviews() {
  return (
    <section className={style.reviews} data-reveal="scale" aria-labelledby="reviews-title">
      <div className={style.heading}>
        <div className={style.headingText}>
          <span className={style.eyebrow}>Client stories</span>
          <h2 id="reviews-title">Loved by North York</h2>
          <p>Real experiences shared by our clients on Google.</p>
        </div>

        <div className={style.ratingCard}>
          <span className={style.googleMark} aria-hidden="true">G</span>
          <div>
            <strong>4.9</strong>
            <span className={style.stars} aria-label="4.9 out of 5 stars">★★★★★</span>
            <small>Based on 1004 Google reviews</small>
          </div>
        </div>
      </div>

      <div className={style.reviewGrid}>
        {reviews.map((review, index) => (
          <article
            className={style.review}
            key={review.name}
            data-reveal
            style={{ '--reveal-delay': `${index * 90}ms` }}
          >
            <div className={style.reviewTop}>
              <span className={style.avatar} aria-hidden="true">{review.initials}</span>
              <div>
                <h3>{review.name}</h3>
                <time>{review.date}</time>
              </div>
              {/* <span className={style.googleMini} aria-label="Google review">G</span> */}
            </div>

            <div className={style.cardStars} aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>“{review.text}”</blockquote>
          </article>
        ))}
      </div>

      <div className={style.linkRow}>
        <a
          className={`${style.googleLink} btn`}
          href="https://www.google.com/maps/search/?api=1&query=Dena+Beauty+Salon+4841+Yonge+St+North+York"
          target="_blank"
          rel="noreferrer"
        >
          Google reviews
        </a>
      </div>
    </section>
  );
}

export default Reviews;
