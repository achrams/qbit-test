import { IFruit, fruits, IComment, comments } from "./data";

const filtered = fruits.reduce((newArr: IFruit[], item) => {
  const duplicated = newArr.find((i: IFruit) => i.fruitName.toLowerCase() === item.fruitName.toLowerCase());
  if (duplicated) {
    duplicated.stock += item.stock;
  } else {
    newArr.push({ ...item });
  }
  return newArr;
}, [])

// soal no. 1
const names = filtered.map(item => item.fruitName)
console.log('1) Nama Buah :', names.join(', '))

// soal no. 2
const types: string[] = fruits.map(fruit => fruit.fruitType).filter((val, i, item) => item.indexOf(val) === i)

const sorted = types.map(type => ({
  fruitType: type,
  stock: 0,
  fruitNames: [] as string[]
}))

fruits.forEach(fruit => {
  const res = sorted.find(item => item.fruitType === fruit.fruitType);
  if (res) {
    res.stock += fruit.stock;
    res.fruitNames.push(fruit.fruitName);
  }
})

const nameList = sorted.map(item => { return { wadah: item.fruitType, fruitName: item.fruitNames } })
console.log('2) Jumlah Wadah :', sorted.length, ',', 'List Buah:', nameList)

// soal no. 3
const stockList = sorted.map(item => { return { wadah: item.fruitType, stock: item.stock } })
console.log('3) Stock:', stockList)

// soal no. 4
console.log('4) Karena data yang dimasukkan banyak terdapat duplikat, sehingga harus difilter agar mendapatkan list yang lebih akurat.')

// soal no.5

let totalComment = 0

comments.forEach(el => {
  totalComment ++
  if (el.replies) {
    totalComment += el.replies.length
    el.replies.forEach(rep => {
      if (rep.replies)
        totalComment += rep.replies?.length
    })
  }
})

console.log('5) Total Komentar :', totalComment)