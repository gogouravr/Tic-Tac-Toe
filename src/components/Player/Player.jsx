/* eslint-disable react/prop-types */
export default function Player({ playerNames, setPlayerNames, symbol }) {

  const changeHandler = (event) => setPlayerNames(oldPlayerNames => {
    const newPlayerNames = { ...oldPlayerNames };
    if (symbol === 'X')
      newPlayerNames.player1 = event.target.value;
    else
      newPlayerNames.player2 = event.target.value;
    return newPlayerNames;
  })

  return (
    <input
      type="text"
      value={symbol === 'X' ? playerNames.player1 : playerNames.player2}
      onChange={changeHandler} />
  )
}
