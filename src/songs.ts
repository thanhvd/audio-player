// export const songs = [...Array(5).keys()].map((n) => ({
//   title: 'Song Number ' + Number(n + 1),
//   src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${Number(
//     n + 1
//   )}.mp3`,
// }));

const fileNames = [
  '001-Succeed in A2 Key - Test 1 - Part 1',
  '002-Succeed in A2 Key - Test 1 - Part 2',
  '003-Succeed in A2 Key - Test 1 - Part 3',
  '004-Succeed in A2 Key - Test 1 - Part 4',
  '005-Succeed in A2 Key - Test 1 - Part 5',
  '006-Succeed in A2 Key - Test 2 - Part 1',
  '007-Succeed in A2 Key - Test 2 - Part 2',
  '008-Succeed in A2 Key - Test 2 - Part 3',
  '009-Succeed in A2 Key - Test 2 - Part 4',
  '010-Succeed in A2 Key - Test 2 - Part 5',
  '011-Succeed in A2 Key - Test 3 - Part 1',
  '012-Succeed in A2 Key - Test 3 - Part 2',
  '013-Succeed in A2 Key - Test 3 - Part 3',
  '014-Succeed in A2 Key - Test 3 - Part 4',
  '015-Succeed in A2 Key - Test 3 - Part 5',
  'KET   CUP 1 - test 2',
  'KET   CUP 1 - test 3',
  'KET   CUP 1 - test 4',
]

export const songs = fileNames.map((fileName) => ({
  title: fileName,
  src: `/files/${fileName}.mp3`
}))