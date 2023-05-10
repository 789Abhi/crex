import React from 'react'
import './MostRunsCard.css'

function MostRunsCard() {
  const stats = [
    {
      title: 'Most Runs',
      player_image: 'https://ik.imagekit.io/c7syb8qpjp/player-vector/M.png/tr:w-156',
      player_shirt_color: 'https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/K.png',
      player_name: 'F D Plessis ',
      team_name: 'Royal Challengers Bangalore',
      points: '343',
      points_title: 'Runs',
    },
    {
      title: 'Most Wickets',
      player_image: 'https://ik.imagekit.io/c7syb8qpjp/player-vector/E1.png/tr:w-300',
      player_shirt_color: 'https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/K.png',
      player_name: 'Mohammed Siraj ',
      team_name: 'Royal Challengers Bangalore',
      points: '14',
      points_title: 'Wickets',
    },
    {
      title: 'Best Strike Rate',
      player_image: 'https://ik.imagekit.io/c7syb8qpjp/player-vector/JO.png/tr:w-156',
      player_shirt_color: 'https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/G.png/tr:w-96',
      player_name: 'M S Dhoni ',
      team_name: 'Chennai Super Kings',
      points: '210.71',
      points_title: '',
    },
    {
      title: 'Best Economy',
      player_image: 'https://ik.imagekit.io/c7syb8qpjp/player-vector/A3.png/tr:w-156',
      player_shirt_color: 'https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/KB.png/tr:w-96',
      player_name: 'M Sharma ',
      team_name: 'Gujarat Titans',
      points: '4.1667',
      points_title: '',
    },
    {
      title: 'Most Fantasy Points',
      player_image: 'https://ik.imagekit.io/c7syb8qpjp/player-vector/M.png',
      player_shirt_color: 'https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/K.png',
      player_name: 'F D Plessis ',
      team_name: 'Royal Challengers Bangalore',
      points: '512',
      points_title: 'Points',
    },
  ];

  return (
    <div>
      {stats.map((events) => (
        <div className='Most__Runs__Card' key={events.title}>
          <span className='runs'>{events.title}</span>
          <div className='player__info'>
            <div className='image__info'>
              <img className='player__image' src={events.player_image} alt='' />
              <div className='dress__image'>
                <img src={events.player_shirt_color} alt='' />
              </div>
            </div>
            <div className='name'>
              <h2>{events.player_name}</h2>
              <span>{events.team_name}</span>
            </div>
            <div className='score'>
              <h2>{events.points}</h2>
              <span>{events.points_title}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MostRunsCard;
