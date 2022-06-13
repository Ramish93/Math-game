function startGame() {
  let name:string | undefined = getInputV('playername');
  logPlayer(name);
  // starting a new game
  postScore(100, name)
}
const logPlayer = (name: string = 'Multimath player'): void => {
  console.log(`${name}`);
  
}

const getInputV = (id: string): string | undefined => {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(id)
  if(inputElement.value === ''){
    return undefined
  }
    return inputElement.value;
}

const postScore= (score:number, playerName:string = 'Multimath player'): void => {
  const scoreE: HTMLElement | null = document.getElementById('postedScores');
  scoreE!.innerText = `${playerName} - ${score}`
}

document.getElementById('startGame')!.addEventListener('click', startGame);