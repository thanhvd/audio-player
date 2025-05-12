// export const songs = [...Array(5).keys()].map((n) => ({
//   title: 'Song Number ' + Number(n + 1),
//   src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${Number(
//     n + 1
//   )}.mp3`,
// }));

const fileNames = [
  'HSG-A6-de3',
  'HSG-A6-de4',
  // 'Test 1 - Part 1',
  // 'Test 1 - Part 2',
  // 'Test 1 - Part 3',
  // 'Test 2 - Part 1',
  // 'Test 2 - Part 2',
  // 'Test 2 - Part 3',
  // 'LISTENING TEST 7',
  // 'LISTENING TEST 8',
  // 'LISTENING TEST 4',
  // 'LISTENING TEST 5',
  // 'LISTENING TEST 6',
  // 'MOCK TEST 4 - LISTENING',
  // 'Listening 2',
  // 'Listening 3',
  // 'Listening 4',
  // 'Listening 5',
  // 'MOCK TEST 5',
  // 'MOCK TEST 3-TEST 1 - A2 KEY FOR SCHOOLS EXAM TRAINER (KETfs) - OXFORD - 2020 FORMAT',
  // 'MOCK TEST 3',
  // 'MOCK TEST 4',
  // 'E1',
  // 'E2',
  // 'E3',
  // 'E4',
  // 'E5',
  // 'E6',
  // 'E7',
  // 'E8',
  // 'E9, 10',
  // 'E11, 12',
  // 'E13, 14',
  // 'E15, 16',
  // '016-Succeed in A2 Key - Test 4 - Part 1',
  // '017-Succeed in A2 Key - Test 4 - Part 2',
  // '018-Succeed in A2 Key - Test 4 - Part 3',
  // '019-Succeed in A2 Key - Test 4 - Part 4',
  // '020-Succeed in A2 Key - Test 4 - Part 5',
  // 'Test 4 Listening',
  // '001-Succeed in A2 Key - Test 1 - Part 1',
  // '002-Succeed in A2 Key - Test 1 - Part 2',
  // '003-Succeed in A2 Key - Test 1 - Part 3',
  // '004-Succeed in A2 Key - Test 1 - Part 4',
  // '005-Succeed in A2 Key - Test 1 - Part 5',
  // '006-Succeed in A2 Key - Test 2 - Part 1',
  // '007-Succeed in A2 Key - Test 2 - Part 2',
  // '008-Succeed in A2 Key - Test 2 - Part 3',
  // '009-Succeed in A2 Key - Test 2 - Part 4',
  // '010-Succeed in A2 Key - Test 2 - Part 5',
  // '011-Succeed in A2 Key - Test 3 - Part 1',
  // '012-Succeed in A2 Key - Test 3 - Part 2',
  // '013-Succeed in A2 Key - Test 3 - Part 3',
  // '014-Succeed in A2 Key - Test 3 - Part 4',
  // '015-Succeed in A2 Key - Test 3 - Part 5',
  // 'KET   CUP 1 - test 2',
  // 'KET   CUP 1 - test 3',
  // 'KET   CUP 1 - test 4',
]

export const songs = fileNames.map((fileName) => ({
  title: fileName,
  src: `/files/${fileName}.mp3`
}))

export const songLinks = [
  'https://www.youtube.com/watch?v=tWlKCkm2P08',
  'https://www.youtube.com/watch?v=8UOuU5VeuCs',
  'https://www.youtube.com/watch?v=mhsygS0z1Tc',
  'https://www.youtube.com/embed/A3UMD6V4a4s?si=OFSst05xSFmWBzLF'
]