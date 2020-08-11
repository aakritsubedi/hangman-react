export const checkWin = (correct, wrong, word) => {
  let status = 'win';

  // Check for win 
  word.split('').forEach(letter => {
    if(!correct.includes(letter)) {
      status = '';
    }
  });

  // Check for loss
  if(wrong.length === 6) status = 'lose';

  return status;
}