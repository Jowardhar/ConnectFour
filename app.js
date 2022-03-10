document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')

  let currentPlayer = 1

  function checkBoard () {
    for (let i = 0; i < squares.length; i++) {
      if (
        (squares[i].classList.contains('player-one') &&
        squares[i + 7].classList.contains('player-one') &&
        squares[i + 14].classList.contains('player-one') &&
        squares[i + 21].classList.contains('player-one')) ||
        (
          squares[i].classList.contains('player-one') &&
          squares[i + 8].classList.contains('player-one') &&
          squares[i + 16].classList.contains('player-one') &&
          squares[i + 24].classList.contains('player-one')) ||
        (
          squares[i].classList.contains('player-one') &&
          squares[i + 6].classList.contains('player-one') &&
          squares[i + 12].classList.contains('player-one') &&
          squares[i + 18].classList.contains('player-one')) ||
        (
          squares[i].classList.contains('player-one') &&
          squares[i + 1].classList.contains('player-one') &&
          squares[i + 2].classList.contains('player-one') &&
          squares[i + 3].classList.contains('player-one')
        )
      ) {
        result.innerHTML = 'Player One Wins!'
      }
      if (
        (squares[i].classList.contains('player-two') &&
        squares[i + 7].classList.contains('player-two') &&
        squares[i + 14].classList.contains('player-two') &&
        squares[i + 21].classList.contains('player-two')) ||
        (
          squares[i].classList.contains('player-two') &&
          squares[i + 8].classList.contains('player-two') &&
          squares[i + 16].classList.contains('player-two') &&
          squares[i + 24].classList.contains('player-two')) ||
        (
          squares[i].classList.contains('player-two') &&
          squares[i + 6].classList.contains('player-two') &&
          squares[i + 12].classList.contains('player-two') &&
          squares[i + 18].classList.contains('player-two')) ||
        (
          squares[i].classList.contains('player-two') &&
          squares[i + 1].classList.contains('player-two') &&
          squares[i + 2].classList.contains('player-two') &&
          squares[i + 3].classList.contains('player-two')
        )
      ) {
        result.innerHTML = 'Player Two Wins!'
        console.log(result.innerHTML)
      }
    }
  }
  for (let i = 0; i < squares.length; i++) {
    if (result.innerHTML !== 'Player One Wins!' || result.innerHTML !== 'Player Two Wins!') {
      squares[i].addEventListener('click', () => {
        // if the square below your current square is taken, you can go on top of it
        if (squares[i + 7].classList.contains('taken') &&
        !squares[i].classList.contains('taken')
        ) {
          if (currentPlayer === 1) {
            squares[i].classList.add('taken')
            squares[i].classList.add('player-one')
            currentPlayer = 2
            displayCurrentPlayer.innerHTML = currentPlayer
          } else if (currentPlayer === 2) {
            squares[i].classList.add('taken')
            squares[i].classList.add('player-two')
            currentPlayer = 1
            displayCurrentPlayer.innerHTML = currentPlayer
          }
        } else alert('Can\'t go here!')
        checkBoard()
      })
    } else squares.removeEventListener('click', () => {})
  }
})
