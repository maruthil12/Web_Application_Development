import { useState } from 'react'
import Hero from './components/Hero.jsx'
import MatchCard from './components/MatchCard.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'

const teams = [
  { code: 'RCB', name: 'Royal Challengers Bengaluru' },
  { code: 'CSK', name: 'Chennai Super Kings' },
  { code: 'MI', name: 'Mumbai Indians' },
  { code: 'KKR', name: 'Kolkata Knight Riders' },
  { code: 'SRH', name: 'Sunrisers Hyderabad' },
  { code: 'RR', name: 'Rajasthan Royals' },
  { code: 'DC', name: 'Delhi Capitals' },
  { code: 'PBKS', name: 'Punjab Kings' },
  { code: 'GT', name: 'Gujarat Titans' },
  { code: 'LSG', name: 'Lucknow Super Giants' },
]

const matches = [
  {
    id: 1,
    teams: [teams[0], teams[1]],
    date: '15 April 2026 · 7:30 PM',
    venue: 'M. Chinnaswamy Stadium, Bengaluru',
    prices: { general: 800, premium: 2000, vip: 5000 },
  },
  {
    id: 2,
    teams: [teams[2], teams[3]],
    date: '17 April 2026 · 7:30 PM',
    venue: 'Wankhede Stadium, Mumbai',
    prices: { general: 900, premium: 2200, vip: 5500 },
  },
  {
    id: 3,
    teams: [teams[4], teams[5]],
    date: '19 April 2026 · 3:30 PM',
    venue: 'Rajiv Gandhi International Stadium, Hyderabad',
    prices: { general: 700, premium: 1800, vip: 4500 },
  },
  {
    id: 4,
    teams: [teams[1], teams[2]],
    date: '21 April 2026 · 7:30 PM',
    venue: 'MA Chidambaram Stadium, Chennai',
    prices: { general: 800, premium: 2000, vip: 5000 },
  },
]

function App() {
  const [selectedTeam, setSelectedTeam] = useState('all')
  const [view, setView] = useState('grid')

  const visibleMatches = matches.filter((match) =>
    selectedTeam === 'all' || match.teams.some((team) => team.code === selectedTeam),
  )

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <section className="matches-section" id="matches">
          <div className="section-heading">
            <div>
              <p className="section-kicker">DON'T MISS A MOMENT</p>
              <h2>Upcoming matches</h2>
              <p className="section-description">
                Pick your game and get ready for an unforgettable matchday.
              </p>
            </div>
          </div>

          <div className="match-controls">
            <label className="filter-control" htmlFor="team-filter">
              <span>Filter by team</span>
              <select
                id="team-filter"
                value={selectedTeam}
                onChange={(event) => setSelectedTeam(event.target.value)}
              >
                <option value="all">All teams</option>
                {teams.map((team) => (
                  <option key={team.code} value={team.code}>{team.code}</option>
                ))}
              </select>
            </label>
            <div className="view-controls" role="group" aria-label="Match display">
              {['grid', 'list'].map((viewOption) => (
                <button
                  className={`view-toggle${view === viewOption ? ' is-active' : ''}`}
                  key={viewOption}
                  type="button"
                  aria-pressed={view === viewOption}
                  onClick={() => setView(viewOption)}
                >
                  {viewOption === 'grid' ? 'Grid view' : 'List view'}
                </button>
              ))}
            </div>
          </div>

          <div className={`match-cards${view === 'list' ? ' list-view' : ''}`}>
            {visibleMatches.length > 0 ? visibleMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            )) : (
              <p className="empty-state">No matches found for this team yet.</p>
            )}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <p>© 2026 IPL Ticket Booking. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
