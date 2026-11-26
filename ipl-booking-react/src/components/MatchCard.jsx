function MatchCard({ match }) {
  return (
    <article className="match-card">
      <div className="match-card-top">
        <span className="match-number">MATCH {String(match.id).padStart(2, '0')}</span>
        <span className="match-status"><span aria-hidden="true" /> TICKETS AVAILABLE</span>
      </div>
      <div className="match-teams">
        {match.teams.map((team, index) => (
          <div className="team" key={team.code}>
            <span className={`team-badge team-${team.code.toLowerCase()}`}>
              {team.code}
            </span>
            <span className="team-name">{team.name}</span>
            {index === 0 && <span className="versus">VS</span>}
          </div>
        ))}
      </div>
      <div className="match-details">
        <p><span className="detail-icon" aria-hidden="true">◷</span>{match.date}</p>
        <p><span className="detail-icon" aria-hidden="true">⌖</span>{match.venue}</p>
      </div>
      <div className="match-card-bottom">
        <p>Tickets from <strong>₹{match.prices.general.toLocaleString('en-IN')}</strong></p>
        <a href="#matches" aria-label={`View ${match.teams[0].code} versus ${match.teams[1].code} match`}>
          View match <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}

export default MatchCard
